export default function EmptyImage() {
  return (
    <div className="aspect-[16/9] bg-gradient-to-br from-pink-100 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl opacity-20">📝</div>
      </div>
    </div>
  )
}
