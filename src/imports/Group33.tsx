import imgImage5 from "figma:asset/0e8d60a8da62a01d5f6f2296cfaa6e2449e276e0.png";
import imgImage4 from "figma:asset/651d1c80b74e5b16b23f8a335f066acd6fb36bd5.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[340px] left-0 top-[8px] w-[316px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[162.03%]" src={imgImage5} />
        </div>
      </div>
      <div className="absolute flex h-[348px] items-center justify-center left-[313px] top-0 w-[263px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[348px] relative w-[263px]" data-name="image 4">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-[0.08%] max-w-none top-[-0.2%] w-[185.07%]" src={imgImage4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Group />
      <div className="absolute bg-white h-[11px] left-0 top-0 w-[313px]" />
    </div>
  );
}