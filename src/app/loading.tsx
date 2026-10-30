import LoaderVisual from "@/components/common/LoaderVisual";

export default function Loading() {
  return (
    <main
      className="site-loader"
      role="status"
      aria-label="Loading iMeet"
    >
      <LoaderVisual />
    </main>
  );
}
