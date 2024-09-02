import Swal from "sweetalert2";

export const useSearchModal = () => {
  const showSearchModal = () => {
    Swal.fire({
      title: "Search",
      input: "text",
      inputPlaceholder: "Search...",
      showCancelButton: true,
      confirmButtonText: "Search",
      confirmButtonColor: "#fbbf24",
      preConfirm: (query) => {
        if (!query) {
          Swal.showValidationMessage("Please enter a search query!");
        }

        return query;
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        console.log("Search query:", result.value);
      }
    });
  };

  return { showSearchModal };
};

export default useSearchModal;
