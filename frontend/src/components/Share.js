import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { RedditShareButton, RedditIcon } from "react-share";

const Share = ({ imagePath }) => {
  return (
    <div>
      <WhatsappShareButton
        url={imagePath}
      >
        <WhatsappIcon lightingColor="white" round={true} />
      </WhatsappShareButton>
      <FacebookShareButton
        url={imagePath}
      >
        <FacebookIcon lightingColor="white" round={true} />
      </FacebookShareButton>
      <RedditShareButton
        url={imagePath}
      >
        <RedditIcon lightingColor="white" round={true} />
      </RedditShareButton>
      <LinkedinShareButton
        url={imagePath}
      >
        <LinkedinIcon lightingColor="white" round={true} />
      </LinkedinShareButton>
    </div>
  );
};

export default Share;