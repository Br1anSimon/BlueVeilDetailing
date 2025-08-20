import fs from 'fs';
import ytch from 'yt-channel-info';

const CHANNEL_ID = 'UCef1bZxi9fy0uL-2K9WaTFw';
const OUTPUT_FILE = 'project_farm_titles.txt';

async function scrapeAllTitles() {
  let allVideos = [];
  let response = await ytch.getChannelVideos({ channelId: CHANNEL_ID, sortBy: 'oldest' });
  allVideos.push(...response.items);
  let continuation = response.continuation;
  while (continuation) {
    response = await ytch.getChannelVideosMore({ continuation });
    allVideos.push(...response.items);
    continuation = response.continuation;
  }
  const titles = allVideos.map((video) => video.title);
  fs.writeFileSync(OUTPUT_FILE, titles.join('\n'), 'utf8');
  console.log(`Saved ${titles.length} titles to ${OUTPUT_FILE}`);
}

scrapeAllTitles().catch((err) => {
  console.error('Failed to scrape Project Farm videos:', err);
});
