import RenderCards from "@/components/reusable/single-use/RenderCards";
import { getPopularityData } from "@/libs/movieSortByPopularity";
import { getRevenueData } from "@/libs/movieSortByRevenue";
import { getVoteData } from "@/libs/movieSortByVote";
import { getReleaseData } from "@/libs/movieSortByRelease";

export default async function Home() {
  const popularityData = getPopularityData();
  const revenueData = getRevenueData();
  const releaseData = getReleaseData();
  const votesData = getVoteData();

  const [popularity, revenue, release, votes] = await Promise.all([
    popularityData,
    revenueData,
    releaseData,
    votesData,
  ]);

  const dataList = {
    popularity: popularity,
    revenue: revenue,
    release: release,
    votes: votes,
  };

  return <RenderCards dataList={dataList}></RenderCards>;
}
