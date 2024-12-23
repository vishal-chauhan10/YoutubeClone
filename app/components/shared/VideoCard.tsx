export default function VideoCard() {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-video rounded-xl bg-slate-800 mb-2" />
      <div className="flex gap-2">
        <div className="h-8 w-8 rounded-full bg-slate-800" />
        <div className="flex flex-col">
          <span className="font-bold">Video Title</span>
          <span className="text-sm text-muted-foreground">Channel Name</span>
          <div className="text-sm text-muted-foreground">
            <span>123K views</span>
            <span> • </span>
            <span>1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
} 