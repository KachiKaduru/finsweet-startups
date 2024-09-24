import icon1 from "../_images/icons/featuresIcon1.svg";
import icon2 from "../_images/icons/featuresIcon2.svg";
import icon3 from "../_images/icons/featuresIcon3.svg";
import icon4 from "../_images/icons/featuresIcon4.svg";
import icon5 from "../_images/icons/featuresIcon5.svg";
import icon6 from "../_images/icons/featuresIcon6.svg";

import missionImg1 from "../_images/about-page/a-man-standing.png";
import missionImg2 from "../_images/about-page/photo-of-women.png";

import profileImg1 from "../_images/profiles/img1.png";
import profileImg2 from "../_images/profiles/img2.png";
import profileImg3 from "../_images/profiles/img3.png";

import featuresImg1 from "../_images/features-page/features-img-1.png";
import featuresImg2 from "../_images/features-page/features-img-2.png";
import featuresImg3 from "../_images/features-page/features-img-3.png";
import featuresImg4 from "../_images/features-page/features-img-4.png";

export const workStnArr = [
  { id: 1, heading: "Strategy" },
  { id: 2, heading: "Wireframing" },
  { id: 3, heading: "Design" },
  { id: 4, heading: "Development" },
];

export const featuresStnArr = [
  { id: 1, icon: icon1, heading: "Uses Client First" },
  { id: 2, icon: icon2, heading: "Two Free Revision Round" },
  { id: 3, icon: icon3, heading: "Template Customization" },
  { id: 4, icon: icon4, heading: "24/7 Support" },
  { id: 5, icon: icon5, heading: "Quick Delivery" },
  { id: 6, icon: icon6, heading: "Hands-on approach" },
];

export const benefitsArr = [
  { id: 1, heading: "Customize with ease", icon: icon3 },
  { id: 2, heading: "Perfectly Responsive", icon: icon6 },
  { id: 3, heading: "Friendly Support", icon: icon1 },
];

export const attributeArr = ["Goal focused", "Continuous improvement"];

export const processArr = ["Planning", "Conception", "Design", "Development"];

export const missionArr = [
  {
    id: 1,
    title: "Our Mission",
    heading: "Inspire, Innovate, Share",
    image: missionImg1,
    direction: "row",
    background: "#fff",
  },
  {
    id: 2,
    title: "Our Vision",
    heading: "Laser focus",
    image: missionImg2,
    direction: "row-reverse",
    background: "#fff",
  },
];

export const teamArr = [
  { id: 1, name: "John Smith", role: "CEO", img: profileImg1 },
  { id: 2, name: "Simon Adams", role: "CTO", img: profileImg2 },
  { id: 3, name: "Sarah Hardin", role: "Project Manager", img: profileImg3 },
  { id: 4, name: "Paul Jones", role: "Design Lead", img: profileImg1 },
];

export const featuresPageArr = [
  {
    id: 1,
    title: "Use Client-first",
    heading: "Top agencies and freelancers around the world use Client-first ",
    image: featuresImg1,
    direction: "row",
    background: "#fff",
  },
  {
    id: 2,
    title: "Free Revision Rounds",
    heading: "Get free Revisions and one week of free maintenance",
    image: featuresImg2,
    direction: "row-reverse",
    background: "#F4F6FC",
  },
  {
    id: 3,
    title: "24/7 Support",
    heading: "Working with us, you will be getting 24/7 priority support",
    image: featuresImg3,
    direction: "row",
    background: "#fff",
  },
  {
    id: 4,
    title: "Quick Delivery",
    heading: "Guranteed 1 week delivery for standard five pager website",
    image: featuresImg4,
    direction: "row-reverse",
    background: "#FCD9801A",
  },
];
