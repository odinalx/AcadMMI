// Default configuration

Coloris({
    el: '.coloris',
    alpha: false,
    theme: 'polaroid',
    themeMode: 'light',
    formatToggle: false
});

/** Instances **/
Coloris.setInstance('.profile-skin', {
    swatchesOnly: true,
    swatches: [
        '#e9caa7',
        '#efcfb8',
        '#f6dec3',
        '#f6e2ab',
        '#eec695',
        '#f2be85',
        '#e6bc8f',
        '#ecbf82',
        '#cf9d7b',
        '#cb9662',
        '#ab8a63',
        '#94613d',
        '#885533',
        '#754420',
        '#b16849',
        '#804b2a',
        '#603b1a',
        '#2f1e14'
    ]
});

Coloris.setInstance('.profile-facialHair', {
    swatchesOnly: true,
    swatches: [
        '#212121',
        '#161213',
        '#666666',
        '#999999',
        '#AAAAAA',
        '#EEEEEE',
        '#dbd2ad',
        '#d3c4a1',
        '#b6a77e',
        '#b8a57a',
        '#857651',
        '#786c51',
        '#575041',
        '#3c352d',
        '#2f1e14'
    ]
});

Coloris.setInstance('.profile-hair', {
    swatches: [
        // beard & hair
        '#212121',
        '#161213',
        '#666666',
        '#999999',
        '#AAAAAA',
        '#EEEEEE',
        '#dbd2ad',
        '#d3c4a1',
        '#b6a77e',
        '#b8a57a',
        '#857651',
        '#786c51',
        '#575041',
        '#3c352d',
        '#2f1e14',
        // hair only
        '#ece174', // pale yellow
        '#deb937', // yellow orange
        '#e56520', // orange
        '#b95435', // orange red
        '#aa2c21', // red orange
        '#8b1a20', // red
        '#5d111d', // dark red
        '#c9c0d7', // pale violet
        '#9d9ac3', // violet blue
        '#7f97c5', // blue
        '#688b9d', // blue green
        '#5c837d', // green blue
        '#2b7549', // green
        '#1b4136' // dark green
    ]
});

Coloris.setInstance('.profile-accessory1', {
    swatches: [
        '#250c0a',
        '#dadfe6',
        '#80ceeb',
        '#3f74b9',
        '#2b7549',
        '#f9b020',
        '#e74011',
    ]
});

Coloris.setInstance('.profile-accessory2', {
    swatches: [
        '#250c0a',
        '#dadfe6',
        '#80ceeb',
        '#3f74b9',
        '#2b7549',
        '#f9b020',
        '#e74011',
    ]
});

Coloris.setInstance('.profile-collar', {
    swatches: [
        '#000000',
        '#212121',
        '#666666',
        '#999999',
        '#AAAAAA',
        '#EEEEEE',
        '#c9c0d7', // pale violet
        '#9d9ac3', // violet blue
        '#7f97c5', // blue
        '#688b9d', // blue green
        '#5c837d', // green blue
        '#80ceeb',
        '#3f74b9',
        '#2b7549',
        '#f9b020',
        '#e74011',
    ]
});

Coloris.setInstance('.profile-logo', {
    swatches: [
        '#000000',
        '#212121',
        '#666666',
        '#999999',
        '#AAAAAA',
        '#EEEEEE',
        '#c9c0d7',
        '#9d9ac3',
        '#7f97c5',
        '#688b9d',
        '#5c837d',
        '#b8e1ef',
        '#70c7ed',
        '#00a8e1',
        '#0087c9',
        '#73c5c4',
        '#00a19d',
        '#00a06d',
        '#3aa948',
        '#547e44',
        '#f9b020',
        '#e74011',


    ]
});

Coloris.setInstance('.profile-eyes', {
    swatches: [
        '#a0cbb0',
        '#b8e1ef',
        '#70c7ed',
        '#00a8e1',
        '#0087c9',
        '#73c5c4',
        '#00a19d',
        '#00a06d',
        '#3aa948',
        '#547e44',
        '#b4ca4e',
        '#ddbc3f',
        '#f4e76c',
        '#bfb66e',
        '#c49a47',
        '#d1883c',
        '#9d6224',
        '#947142',
        '#866135',
        '#58663b',
    ]
});

Coloris.setInstance('.profile-chest', {
    swatches: [

        '#a0cbb0',
        '#b8e1ef',
        '#70c7ed',
        '#00a8e1',
        '#0087c9',
        '#73c5c4',
        '#00a19d',
        '#00a06d',
        '#3aa948',
        '#547e44',
        '#b4ca4e',
        '#ddbc3f',
        '#f4e76c',
        '#bfb66e',
        '#c49a47',
        '#d1883c',
        '#9d6224',
        '#947142',
        '#866135',
        '#58663b',
    ]
});

document.getElementById("closeButtonAvatar").onclick = (event) => {
    document.dispatchEvent(new CustomEvent("notify", { detail: {type:"close"} }));
};

let changeColor = (target, color) => {
    document.dispatchEvent(
        new CustomEvent("notify", { detail: {type:"notify", command:"html_notify", target:target, data:color} })
    );
};

document.getElementById("skinInput").addEventListener('change',
     (event) => {
     changeColor('skin', event.target.value);
    }
)
document.getElementById("skinInput").addEventListener('input',
    (event) => {
        changeColor('skin', event.target.value);
    }
)

document.getElementById("hairInput").addEventListener('change',
 (event) => {
     changeColor('hair', event.target.value);
 }
)
document.getElementById("hairInput").addEventListener('input',
 (event) => {
     changeColor('hair', event.target.value);
 }
)

document.getElementById("eyesInput").addEventListener('change',
     (event) => {
     changeColor('eyes', event.target.value);
    }
)
document.getElementById("eyesInput").addEventListener('input',
    (event) => {
        changeColor('eyes', event.target.value);
    }
)

document.getElementById("lipsInput").addEventListener('change', 
     (event) => {
     changeColor('lips', event.target.value);
    }
)
document.getElementById("lipsInput").addEventListener('input',
    (event) => {
        changeColor('lips', event.target.value);
    }
)

document.getElementById("facialHairInput").addEventListener('change', 
     (event) => {
     changeColor('facialHair', event.target.value);
    }
)
document.getElementById("facialHairInput").addEventListener('input',
    (event) => {
        changeColor('facialHair', event.target.value);
    }
)

document.getElementById("accessory1Input").addEventListener('change', 
     (event) => {
     changeColor('accessory1', event.target.value);
    }
)
document.getElementById("accessory1Input").addEventListener('input',
    (event) => {
        changeColor('accessory1', event.target.value);
    }
)

document.getElementById("accessory2Input").addEventListener('change', 
     (event) => {
     changeColor('accessory2', event.target.value);
    }
)
document.getElementById("accessory2Input").addEventListener('input',
    (event) => {
        changeColor('accessory2', event.target.value);
    }
)

document.getElementById("collarInput").addEventListener('change', 
     (event) => {
     changeColor('collar', event.target.value);
    }
)
document.getElementById("collarInput").addEventListener('input',
    (event) => {
        changeColor('collar', event.target.value);
    }
)

document.getElementById("chestInput").addEventListener('change', 
     (event) => {
     changeColor('chest', event.target.value);
    }
)
document.getElementById("chestInput").addEventListener('input',
    (event) => {
        changeColor('chest', event.target.value);
    }
)

document.getElementById("logoInput").addEventListener('change', 
     (event) => {
     changeColor('logo', event.target.value);
    }
)
document.getElementById("logoInput").addEventListener('input',
    (event) => {
        changeColor('logo', event.target.value);
    }
)



