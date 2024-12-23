import VideoCard from "@/app/components/shared/VideoCard";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* We'll populate this with actual videos later */}
        {[...Array(8)].map((_, i) => (
          <VideoCard key={i} />
        ))}
      </div>
    </div>
  );
}
