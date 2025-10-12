import bgImg1 from "@/assets/images/bgImg.png";

export const Database = () => {
  return (
    <div className="w-full">
        <div
          className="w-screen h-full bg-cover"
          style={{
            backgroundImage: `url(${bgImg1})`,
          }}
        />
        <div>DataBase</div>
    </div>
  )
}
