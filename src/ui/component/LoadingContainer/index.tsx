export default function LoadingContainer() {
  return (
    <div className="flex justify-center m-20">
      <p className="italic font-bold mr-3 text-primary">Loading</p>
      <span className="loading loading-dots loading-xl"></span>
    </div>
  );
}