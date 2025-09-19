export default function Loader() {
  return <div className=""></div>
}

export const Skelton=()=>{
return (
    <div className="flex flex-col gap-4  min-w-xs p-4 rounded-md border animate-pulse">
      <div className="flex-1 space-y-8 py-1">
        <div className="h-2 rounded bg-muted-foreground"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-muted-foreground"></div>
            <div className="col-span-1 h-2 rounded bg-muted-foreground"></div>
          </div>
        </div>
        <div className="h-2 rounded bg-muted-foreground"></div>

        <div className="h-2 rounded bg-muted-foreground"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 h-2 rounded bg-muted-foreground"></div>
            <div className="col-span-2 h-2 rounded bg-muted-foreground"></div>
          </div>
        </div>
        <div className="h-2 rounded bg-muted-foreground"></div>

        <div className="h-2 rounded bg-muted-foreground"></div>
      </div>
    </div>
  );
}
