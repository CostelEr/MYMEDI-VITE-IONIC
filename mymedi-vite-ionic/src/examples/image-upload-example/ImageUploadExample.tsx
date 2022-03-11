import { useRef, useState, useEffect } from "react";

export function ImageUploadExample() {
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
    <div className="bg-red-700 text-center text-white flex justify-center w-full h-20">
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
        <button
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current?.click();
          }}
          className="rounded-full bg-yellow-300 text-black"
        >
          +
        </button>
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
