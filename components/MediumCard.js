import Image from "next/image";

const MediumCard = ({ item }) => {
  return (
    <div
      className="cursor-pointer hover:scale-105
    transform transition duration-300 ease-out "
    >
      <div className="relative h-80 w-80">
        <Image src={item.img} layout="fill" className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{item.title}</h3>
    </div>
  );
};

export default MediumCard;
