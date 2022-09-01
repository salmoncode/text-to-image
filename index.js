window.onload = () => {
    const $outputBackground = document.querySelector(".output-background")
    const $outputText = document.querySelector(".output-text")

    const $inputWidth = document.querySelector(".input-width")
    $inputWidth.addEventListener("input", e => {
        $outputBackground.style.width = `${$inputWidth.value}px`
    })

    const $inputHeight = document.querySelector(".input-height")
    $inputHeight.addEventListener("input", e => {
        $outputBackground.style.width = `${$inputHeight.value}px`
    })

    const $inputBackground = document.querySelector(".input-background")
    $inputBackground.addEventListener("input", e => {
        $outputBackground.style.backgroundColor = $inputBackground.value
    })

    const $inputColor = document.querySelector(".input-color")
    $inputColor.addEventListener("input", e => {
        $outputBackground.style.color = $inputColor.value
    })

    const $inputText = document.querySelector(".input-text")
    $inputText.addEventListener("input", e => {
        let inputText = $inputText.value
        inputText = inputText.replace(/\r\n/g, '\n')
        inputText = inputText.replace(/\r/g, '\n')

        const lines = inputText.split('\n')
        const replacedText = lines.join("<br/>")
        $outputText.innerHTML = replacedText
    })

    const $inputFontSize = document.querySelector(".input-font-size")
    $inputFontSize.addEventListener("input", e => {
        $outputText.style.fontSize = `${$inputFontSize.value}px`
        console.log($outputText.style)
    })

    var $btnDownload = document.querySelector(".btn-download");
    $btnDownload.addEventListener("click", () => {
        html2canvas($outputBackground).then(canvas => {
            let downloadEle = document.createElement("a");
            downloadEle.href = canvas.toDataURL("image/png");
            downloadEle.download = "canvas.png";
            downloadEle.click();
        });
    })
}
