import Swal from "sweetalert2";

export const useCopyToClipboard = () => {
  const copyText = (text: string, successMessage: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          text: successMessage,
          showConfirmButton: false,
          timer: 4000,
        });
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return { copyText };
};

export default useCopyToClipboard;
