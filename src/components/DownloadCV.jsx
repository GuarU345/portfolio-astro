const handleClick = () => {
    const fileUrl = 'CV.pdf'
    const link = document.createElement('a');

    link.href = fileUrl;
    link.download = 'cv.ext';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


const DownloadCV = () => {

    return (
        <button
            onClick={handleClick}
            class="grid place-content-center bg-zinc-800 rounded-xl hover:opacity-80"
        >
            <p class="font-bold">Descarga mi CV y permiteme continuar con mi proxima gran aventura profesional</p>
        </button>
    )
}

export default DownloadCV