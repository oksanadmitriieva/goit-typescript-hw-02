import { SlLike } from "react-icons/sl";

import { FiUserCheck } from "react-icons/fi";
import { APIresults } from "../../api";
import css from "./ImageCard.module.css";

type Props = {
  item: APIresults;
  onOpen: (imgUrl: string, imgAlt: string) => void;
};

const ImageCard: React.FC<Props> = ({
  item: {
    alt_description: alt,
    urls: { small, regular },
    user: { name },
    likes,
  },
  onOpen,
}: Props) => {
  return (
    <div className={css.item}>
      <img
        className={css.image}
        src={small}
        alt={alt}
        width={360}
        onClick={() => {
          onOpen(regular, alt);
        }}
      />
      <div className={css.descr}>
        <p>
          <SlLike color="red" className={css.icon} />
          <b>Likes: </b>
          {likes}
        </p>
        {name !== null && (
          <p className={css.text}>
            <FiUserCheck color="red" className={css.icon} />
            <b>Author: </b>
            {name}
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
