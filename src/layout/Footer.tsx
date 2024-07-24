import IconLocationDot from "assets/icons/IconLocationDot";
import IconIconCall from "assets/icons/IconIconCall";
import IconMaildotru from "assets/icons/IconMaildotru";
import IconLinkedin from "assets/icons/IconLinkedin";
import IconTwitterLogo from "assets/icons/IconTwitterLogo";
import IconGithub from "assets/icons/IconGithub";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-14 py-14 px-16">
        <hr className="w-full border-2  border-tertiary"></hr>

        <div className="flex flex-row gap-12 justify-around ">
          <ContactColumn />
          <SocialColumn />
        </div>
      </div>
    </footer>
  );
}

const ContactColumn = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className={"text-secondary font-bold uppercase text-sm"}>Contact</p>
      <a
        href="https://maps.app.goo.gl/NC1vCnaTMjGQF1yX9"
        target="_blank"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconLocationDot className="h-4 w-4 text-gray-400" />{" "}
        <span>Bangakore, Karnataka, India</span>
      </a>
      <a
        href="tel:+919666366139"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconIconCall className="h-4 w-4 text-gray-400" />{" "}
        <span>(+91) 9666366139</span>
      </a>

      <a
        type="mail"
        href="mailto:developer.ravinder.reddy@gmail.com?subject=From%20Portfolio%20%7C%20Job%20Opportunity&body=Hi%20Ravinder%20Reddy"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconMaildotru className="h-4 w-4 text-gray-400" />{" "}
        <span>developer.ravinder.reddy@gmail.com</span>
      </a>
    </div>
  );
};

const SocialColumn = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <p className={"text-secondary font-bold uppercase text-sm"}>Social</p>
      <a
        href="https://www.linkedin.com/in/ravinder-reddy-kothabad-333719192/"
        target="_blank"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconLinkedin className="h-4 w-4 text-gray-400" /> <span>LinkedIn</span>
      </a>
      <a
        href="https://x.com/Ravinder__Reddy"
        target="_blank"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconTwitterLogo className="h-4 w-4 text-gray-400" />{" "}
        <span>Twitter (X)</span>
      </a>
      <a
        href="https://github.com/devravinder/devravinder"
        target="_blank"
        className="font-medium flex felx-row gap-2 items-center"
      >
        {" "}
        <IconGithub className="h-4 w-4 text-gray-400" /> <span>GitHub</span>
      </a>
    </div>
  );
};
