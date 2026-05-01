#!/bin/bash
# FRA Photo Montage Builder
# Curated sequence: campus → academics → student life → sports → community
# Ken Burns zoom/pan on each image, crossfade transitions, jazz soundtrack

set -e

ARCHIVE="/home/danko/projects/fra/archive"
MUSIC="/home/danko/projects/fra/music/brazo-wa-afrika-solace-in-jazz.mp3"
OUTPUT="/home/danko/projects/fra/fra-montage.mp4"
TMPDIR="/tmp/fra-montage"
WIDTH=1920
HEIGHT=1080
DUR=4          # seconds per image
FADE=1         # crossfade duration

mkdir -p "$TMPDIR/frames"

# Curated image sequence — narrative arc
IMAGES=(
  # Opening: Logo & campus
  "$ARCHIVE/crest-background.png"
  "$ARCHIVE/homepage/hero-panoramic.jpg"
  "$ARCHIVE/homepage/hero-student-life-1.jpg"

  # Academics: youngest to oldest
  "$ARCHIVE/academics/preschool-1.jpg"
  "$ARCHIVE/academics/preschool-3.jpg"
  "$ARCHIVE/academics/lower-school-1.jpg"
  "$ARCHIVE/academics/lower-school-3.jpg"
  "$ARCHIVE/academics/middle-school-2.jpg"
  "$ARCHIVE/academics/upper-school-1.jpg"
  "$ARCHIVE/academics/upper-school-3.jpg"

  # Student life
  "$ARCHIVE/homepage/hero-student-life-3.jpg"
  "$ARCHIVE/homepage/gallery-student-1.jpg"
  "$ARCHIVE/homepage/hero-student-life-5.jpg"
  "$ARCHIVE/homepage/news-apr-2026.jpg"
  "$ARCHIVE/homepage/gallery2-student-life.jpg"

  # Sports: the heart
  "$ARCHIVE/sports/football-varsity-team.jpg"
  "$ARCHIVE/sports/football-game-action.jpg"
  "$ARCHIVE/sports/softball-varsity-team.jpg"
  "$ARCHIVE/sports/softball-catcher-action.jpg"
  "$ARCHIVE/sports/baseball-team-2026.jpg"
  "$ARCHIVE/sports/boys-basketball-varsity.jpg"
  "$ARCHIVE/sports/girls-basketball-varsity.jpg"
  "$ARCHIVE/sports/track-girls-team-2026.jpg"
  "$ARCHIVE/sports/track-boys-team-2026.jpg"
  "$ARCHIVE/sports/cheer-varsity-squad.jpg"
  "$ARCHIVE/sports/shotgun-team-large.jpg"
  "$ARCHIVE/sports/twirl-fire-baton.jpg"
  "$ARCHIVE/sports/twirl-full-team.jpg"

  # Close: community & leadership
  "$ARCHIVE/homepage/hero-student-life-7.jpg"
  "$ARCHIVE/sports/football-team-huddle.jpg"
  "$ARCHIVE/logo.png"
)

TOTAL=${#IMAGES[@]}
echo "Building montage from $TOTAL images..."
echo "Duration per image: ${DUR}s | Crossfade: ${FADE}s"
echo "Total estimated length: $(( TOTAL * DUR - (TOTAL - 1) * FADE ))s"

# Step 1: Generate individual clips with Ken Burns effect
for i in "${!IMAGES[@]}"; do
  IMG="${IMAGES[$i]}"
  FNAME=$(basename "$IMG")
  CLIP="$TMPDIR/clip_$(printf '%03d' $i).mp4"

  # Alternate between zoom-in and zoom-out for variety
  if (( i % 3 == 0 )); then
    # Slow zoom in
    ZP="zoompan=z='min(zoom+0.0008,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$((DUR*25)):s=${WIDTH}x${HEIGHT}:fps=25"
  elif (( i % 3 == 1 )); then
    # Slow zoom out
    ZP="zoompan=z='if(eq(on,0),1.15,max(zoom-0.0008,1.0))':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$((DUR*25)):s=${WIDTH}x${HEIGHT}:fps=25"
  else
    # Slow pan right
    ZP="zoompan=z='1.1':x='if(eq(on,0),0,min(x+1,iw-iw/zoom))':y='ih/2-(ih/zoom/2)':d=$((DUR*25)):s=${WIDTH}x${HEIGHT}:fps=25"
  fi

  echo "  [$((i+1))/$TOTAL] $FNAME"
  ffmpeg -y -loop 1 -i "$IMG" \
    -vf "scale=${WIDTH}:${HEIGHT}:force_original_aspect_ratio=decrease,pad=${WIDTH}:${HEIGHT}:(ow-iw)/2:(oh-ih)/2:black,${ZP}" \
    -t "$DUR" -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p \
    "$CLIP" 2>/dev/null
done

# Step 2: Build crossfade chain
echo ""
echo "Applying crossfade transitions..."

# Start with first clip
cp "$TMPDIR/clip_000.mp4" "$TMPDIR/merged.mp4"

for i in $(seq 1 $((TOTAL - 1))); do
  CLIP="$TMPDIR/clip_$(printf '%03d' $i).mp4"
  PREV="$TMPDIR/merged.mp4"
  NEXT="$TMPDIR/merged_next.mp4"

  # Get duration of current merged file
  PREV_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$PREV" | cut -d. -f1)
  OFFSET=$(( PREV_DUR - FADE ))

  echo "  Crossfading clip $((i+1))/$TOTAL (offset: ${OFFSET}s)"
  ffmpeg -y -i "$PREV" -i "$CLIP" \
    -filter_complex "[0:v][1:v]xfade=transition=fade:duration=${FADE}:offset=${OFFSET}[v]" \
    -map "[v]" -c:v libx264 -preset fast -crf 18 -pix_fmt yuv420p \
    "$NEXT" 2>/dev/null

  mv "$NEXT" "$PREV"
done

# Step 3: Add music and fade out
echo ""
echo "Adding soundtrack..."
VIDEO_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$TMPDIR/merged.mp4")
echo "  Video duration: ${VIDEO_DUR}s"

# Fade audio in over 2s, fade out over 3s at the end
FADE_OUT_START=$(echo "$VIDEO_DUR - 3" | bc)

ffmpeg -y -i "$TMPDIR/merged.mp4" -i "$MUSIC" \
  -filter_complex "[1:a]afade=t=in:d=2,afade=t=out:st=${FADE_OUT_START}:d=3[a]" \
  -map 0:v -map "[a]" \
  -c:v copy -c:a aac -b:a 192k \
  -shortest \
  "$OUTPUT" 2>/dev/null

echo ""
echo "Done! Output: $OUTPUT"
ls -lh "$OUTPUT"
FINAL_DUR=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$OUTPUT")
echo "Final duration: ${FINAL_DUR}s"
