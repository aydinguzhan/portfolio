import { Linkedin, Mail } from "lucide-react";
import React from "react";

type Props = {};
const FooterItem = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <span className="flex-1 flex  justify-center items-center gap-2  ">
      <span>{children}</span>
      <span className="text-lg">{label}</span>
    </span>
  );
};

const MediumSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 512 512"
    >
      <title />
      <rect height="412.22" rx="55.43" width="412.22" x="49.89" y="49.89" />
      <circle cx="197.51" cy="256" fill="#fff" r="77.45" />
      <ellipse cx="318.97" cy="255.56" fill="#fff" rx="35.07" ry="72.01" />
      <ellipse cx="378.21" cy="255.56" fill="#fff" rx="13.73" ry="65.08" />
    </svg>
  );
};

const footetItem = [
  {
    children: <Mail size={24} />,
    label: "aydinoguzhan2335@gmail.com",
  },
  {
    children: <MediumSvg />,
    label: "@aydinoguzhan2335",
  },
  {
    children: <Linkedin size={24} />,
    label: "/aydnoguz",
  },
];
export default function Connect({}: Props) {
  return (
    <div className="min-w-[50%] text-white border-t-1 mt-6 bg-amber-400">
      <div className="p-4 flex justify-center center">
        {footetItem.map((item: any) => {
          return <FooterItem children={item.children} label={item.label} />;
        })}
      </div>
    </div>
  );
}
