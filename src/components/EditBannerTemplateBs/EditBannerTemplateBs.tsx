import React, { useState, useEffect } from "react";

interface EditBannerProps {
  banner: any;
  onSave: (updatedBanner: any) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({
  banner,
  onSave,
  onClose,
}) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [image, setImage] = useState(banner.image);
  const [background, setBackground] = useState(banner.background);

  useEffect(() => {
    setTitle(banner.title);
    setDescription(banner.description);
    setCta(banner.cta);
    setImage(banner.image);
    setBackground(banner.background);
  }, [banner]);

  const handleSubmit = () => {
    const updatedBanner = {
      ...banner,
      title,
      description,
      cta,
      image,
      background,
    };
    onSave(updatedBanner);
  };

  return (
    <div className="bottom-sheet">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        value={cta}
        onChange={(e) => setCta(e.target.value)}
        placeholder="CTA"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
      />
      <input
        value={background}
        onChange={(e) => setBackground(e.target.value)}
        placeholder="Background URL"
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditBannerTemplateBs;
