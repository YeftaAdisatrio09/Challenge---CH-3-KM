console.log("test");

$(document).ready(function () {
    $("#warning").click(function (e) {
        e.preventDefault();
        $("#message").html(`
                <div class="alert  text-white bg-dark" role="alert">
                    <button type="button" class="close" aria-label="Close" aria-hidden="true">
                    ×
                    </button> Data Berhasil Dihapus
                </div>`);
    });
});
