import { IonAvatar } from "@ionic/react";
import { useRef, useState, useEffect } from "react";

export function ImageUpload() {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>();
  const fileInputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div>
      {preview ? (
        <img
          className="w-20 h-20 rounded-full border-solid border-4 border-black"
          src={preview}
          style={{ objectFit: "cover" }}
          onClick={() => {
            setImage(null);
          }}
        />
      ) : (
        <IonAvatar
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}
          className="rounded-full"
        >
          <img src="https://zm-cs.ru/files/avatars/1537189754.jpg" />
        </IonAvatar>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*"
        onChange={(event) => {
          const file = event.target.files[0];
          if (file && file.type.substr(0, 5) === "image") {
            setImage(file);
          } else {
            setImage(null);
          }
        }}
      />
    </div>
  );
}
