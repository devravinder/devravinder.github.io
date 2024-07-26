import IconLocationDot from "assets/icons/IconLocationDot";
import IconIconCall from "assets/icons/IconIconCall";
import IconMaildotru from "assets/icons/IconMaildotru";
import IconLinkedin from "assets/icons/IconLinkedin";
import IconTwitterLogo from "assets/icons/IconTwitterLogo";
import IconGithub from "assets/icons/IconGithub";
import IconExternalLink from "assets/icons/IconExternalLink";
import IconWeb from "assets/icons/IconWeb";

export default function Footer({
  contactInfo,
  socialLinks,
}: {
  contactInfo: ContactInfo;
  socialLinks: Links;
}) {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-14 py-14 px-16">
        <hr className="w-full border-2  border-tertiary"></hr>

        <div className="flex flex-row gap-12 justify-around ">
          <ContactColumn contactInfo={contactInfo} />
          <SocialColumn socialLinks={socialLinks} />
        </div>
      </div>
    </footer>
  );
}

const ContactColumn = ({ contactInfo }: { contactInfo: ContactInfo }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className={"text-secondary font-bold uppercase text-sm"}>Contact</p>
      <a
        href="#"
        target="_blank"
        className="font-medium flex felx-row gap-2 items-center"
      >
        <IconLocationDot className="h-4 w-4 text-gray-400" />
        <span>{contactInfo.address}</span>
      </a>
      <a href="#" className="font-medium flex felx-row gap-2 items-center">
        <IconIconCall className="h-4 w-4 text-gray-400" />
        <span>{contactInfo.phone}</span>
      </a>

      <a
        type="mail"
        href="#"
        className="font-medium flex felx-row gap-2 items-center"
      >
        <IconMaildotru className="h-4 w-4 text-gray-400" />
        <span>{contactInfo.email}</span>
      </a>
    </div>
  );
};

const linkIcons: Record<string, JSX.Element> = {
  github: <IconGithub className="h-4 w-4 text-gray-400" />,
  twitter: <IconTwitterLogo className="h-4 w-4 text-gray-400" />,
  linkedin: <IconLinkedin className="h-4 w-4 text-gray-400" />,
  website: <IconExternalLink className="h-4 w-4 text-gray-400" />,
  externalLink: <IconWeb className="h-4 w-4 text-gray-400" />,
};

const SocialNames: Record<string, string> = {
  github: "Github",
  twitter: "Twitter",
  linkedin: "LinkedIn",
  website: "Website",
  externalLink: "External Link",
};

const SocialColumn = ({ socialLinks }: { socialLinks: Links }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className={"text-secondary font-bold uppercase text-sm"}>Social</p>

      {Object.entries(socialLinks).map(([name, value]) => (
        <a
          key={`social-${name}`}
          href={value}
          target="_blank"
          className="font-medium flex felx-row gap-2 items-center"
        >
          {linkIcons[name]} <span>{SocialNames[name]}</span>
        </a>
      ))}
    </div>
  );
};
