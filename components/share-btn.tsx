import { LinkedinShareButton, LinkedinIcon } from "next-share";
import { TwitterShareButton, TwitterIcon } from "next-share";
import { WhatsappShareButton, WhatsappIcon } from "next-share";
import { PinterestShareButton, PinterestIcon } from "next-share";
import { FacebookShareButton, FacebookIcon } from "next-share";

interface IShareBtnProps {
  url: string;
  title: string;
}
function ShareButton({ url, title }: IShareBtnProps) {
  return (
    <div className="flex gap-[3px]">
      <FacebookShareButton url={url} quote={title} hashtag={"#thefounded.in"}>
        <FacebookIcon size={28} round />
      </FacebookShareButton>
      <LinkedinShareButton title={title} url={url}>
        <LinkedinIcon size={28} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={28} round />
      </TwitterShareButton>

      <WhatsappShareButton url={url} title={title} separator=":: ">
        <WhatsappIcon size={28} round />
      </WhatsappShareButton>

      <PinterestShareButton url={url} media={title}>
        <PinterestIcon size={28} round />
      </PinterestShareButton>
    </div>
  );
}

export default ShareButton;
