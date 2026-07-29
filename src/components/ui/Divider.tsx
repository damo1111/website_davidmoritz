import Image from "next/image";

export function Divider() {
  return (
    <div className="mx-auto my-20 flex max-w-6xl items-center gap-4 px-6 md:my-28">
      <div className="h-px flex-1 bg-line" />
      <Image
        src="/images/avatar.png"
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="h-7 w-7 rounded-full"
      />
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
