import React, {useState} from "react";
import anime from 'animejs/lib/anime.es.js';

const RoomApp = () => {

        const [instructionOverlay] = useState(true)

        //SVG paths
        const ui_button_path = "M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
        const ui_button_path_2 = "M0 0H200V200H0V0Z"

        React.useEffect( () =>{
            const leader_button = document.querySelector('#leader_button')
            leader_button.addEventListener('click', () =>{
                window.location.href='/leaderboard.html';
            })

            const instruct_button = document.querySelector("#instructions_button")
            instruct_button.addEventListener('click', () =>{
                anime({
                    targets: '#instructionOverlay',
                    translateX: 1120
                })
            })
            const play_button = document.querySelector("#play_button")
            let toggle = false

            play_button.addEventListener('click', () =>{
                const button_timeline = anime.timeline({
                    duration: 540,
                    easing: 'easeOutExpo'
                })
                button_timeline.add({
                    targets: '.right_ui_button',
                    d: [
                        {value: ui_button_path},
                        {value: ui_button_path_2}
                    ]
                })
                const button_timeline_2 = anime.timeline({
                    duration: 540,
                    easing: 'easeOutExpo'
                })
                button_timeline_2.add({
                    targets: '.left_ui_button',
                    d: [
                        {value: ui_button_path},
                        {value: ui_button_path_2}
                    ]
                })
                button_timeline_2.add({
                    targets: '.left_ui_button',
                    translateX: 75
                })
                const overlay_timeline = anime.timeline({
                    duration: 750,
                    easing: 'easeOutExpo'
                })
                overlay_timeline.add({
                    targets: '.overlay',
                    translateX: 1100
                })
                const instructions_timeline = anime.timeline({
                    duration: 750,
                    easing: 'easeOutExpo'
                })
                instructions_timeline.add({
                    targets: '#instructionOverlay',
                    translateX: 2200
                })
                const text_timeline = anime.timeline({
                    duration: 750,
                    easing: 'easeOutExpo'
                })
                text_timeline.add({
                    targets: '.button_text',
                    scale: 0
                })
                setTimeout( () => {
                    window.location.href='/game.html'
                }, 750)
                
            })
        })

    return (
        <div className="RoomApp">
            <h1 className='overlay'>Welcome to Memory Game!</h1>
            <svg id='blue_yellow' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="85" height="85" fill="#1D52DA"/>
                <rect x="85" width="85" height="85" fill="#DAC71D"/>
            </svg>
            <svg id='red_green' width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="85" width="85" height="85" fill="#DA1D1D"/>
                <rect width="85" height="85" fill="#45963E"/>
            </svg>
            <div className="buttonContainer">
                <svg id="play_button" width="271" height="201" viewBox="0 0 271 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class='left_ui_button' d="M270.5 100.5C270.5 200.5 190.228 200.5 135 200.5C79.7715 200.5 0.5 200.5 0.5 100.5C0.5 0.499985 79.7715 0.5 135 0.5C190.228 0.5 270.5 0.5 270.5 100.5Z" fill="#DA1D1D"/>
                    <path class='button_text' d="M86.2812 104.188V122H80.2812V76.5H97.0625C102.042 76.5 105.938 77.7708 108.75 80.3125C111.583 82.8542 113 86.2188 113 90.4062C113 94.8229 111.615 98.2292 108.844 100.625C106.094 103 102.146 104.188 97 104.188H86.2812ZM86.2812 99.2812H97.0625C100.271 99.2812 102.729 98.5312 104.438 97.0312C106.146 95.5104 107 93.3229 107 90.4688C107 87.7604 106.146 85.5938 104.438 83.9688C102.729 82.3438 100.385 81.5 97.4062 81.4375H86.2812V99.2812ZM126.031 122H120.25V74H126.031V122ZM156.188 122C155.854 121.333 155.583 120.146 155.375 118.438C152.688 121.229 149.479 122.625 145.75 122.625C142.417 122.625 139.677 121.688 137.531 119.812C135.406 117.917 134.344 115.521 134.344 112.625C134.344 109.104 135.677 106.375 138.344 104.438C141.031 102.479 144.802 101.5 149.656 101.5H155.281V98.8438C155.281 96.8229 154.677 95.2188 153.469 94.0312C152.26 92.8229 150.479 92.2188 148.125 92.2188C146.062 92.2188 144.333 92.7396 142.938 93.7812C141.542 94.8229 140.844 96.0833 140.844 97.5625H135.031C135.031 95.875 135.625 94.25 136.812 92.6875C138.021 91.1042 139.646 89.8542 141.688 88.9375C143.75 88.0208 146.01 87.5625 148.469 87.5625C152.365 87.5625 155.417 88.5417 157.625 90.5C159.833 92.4375 160.979 95.1146 161.062 98.5312V114.094C161.062 117.198 161.458 119.667 162.25 121.5V122H156.188ZM146.594 117.594C148.406 117.594 150.125 117.125 151.75 116.188C153.375 115.25 154.552 114.031 155.281 112.531V105.594H150.75C143.667 105.594 140.125 107.667 140.125 111.812C140.125 113.625 140.729 115.042 141.938 116.062C143.146 117.083 144.698 117.594 146.594 117.594ZM180.688 113.531L188.562 88.1875H194.75L181.156 127.219C179.052 132.844 175.708 135.656 171.125 135.656L170.031 135.562L167.875 135.156V130.469L169.438 130.594C171.396 130.594 172.917 130.198 174 129.406C175.104 128.615 176.01 127.167 176.719 125.062L178 121.625L165.938 88.1875H172.25L180.688 113.531Z" fill="white"/>
                </svg>
                <svg id="leader_button" width="271" height="201" viewBox="0 0 271 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class='right_ui_button' d="M270.5 100.5C270.5 200.5 190.228 200.5 135 200.5C79.7715 200.5 0.5 200.5 0.5 100.5C0.5 0.499985 79.7715 0.5 135 0.5C190.228 0.5 270.5 0.5 270.5 100.5Z" fill="#DAC71D"/>
                    <path class='button_text' d="M8.48438 112.32H24.6562V116H3.96094V81.875H8.48438V112.32ZM39.6328 116.469C36.1953 116.469 33.3984 115.344 31.2422 113.094C29.0859 110.828 28.0078 107.805 28.0078 104.023V103.227C28.0078 100.711 28.4844 98.4688 29.4375 96.5C30.4062 94.5156 31.75 92.9688 33.4688 91.8594C35.2031 90.7344 37.0781 90.1719 39.0938 90.1719C42.3906 90.1719 44.9531 91.2578 46.7812 93.4297C48.6094 95.6016 49.5234 98.7109 49.5234 102.758V104.562H32.3438C32.4062 107.062 33.1328 109.086 34.5234 110.633C35.9297 112.164 37.7109 112.93 39.8672 112.93C41.3984 112.93 42.6953 112.617 43.7578 111.992C44.8203 111.367 45.75 110.539 46.5469 109.508L49.1953 111.57C47.0703 114.836 43.8828 116.469 39.6328 116.469ZM39.0938 93.7344C37.3438 93.7344 35.875 94.375 34.6875 95.6562C33.5 96.9219 32.7656 98.7031 32.4844 101H45.1875V100.672C45.0625 98.4688 44.4688 96.7656 43.4062 95.5625C42.3438 94.3438 40.9062 93.7344 39.0938 93.7344ZM70.2188 116C69.9688 115.5 69.7656 114.609 69.6094 113.328C67.5938 115.422 65.1875 116.469 62.3906 116.469C59.8906 116.469 57.8359 115.766 56.2266 114.359C54.6328 112.938 53.8359 111.141 53.8359 108.969C53.8359 106.328 54.8359 104.281 56.8359 102.828C58.8516 101.359 61.6797 100.625 65.3203 100.625H69.5391V98.6328C69.5391 97.1172 69.0859 95.9141 68.1797 95.0234C67.2734 94.1172 65.9375 93.6641 64.1719 93.6641C62.625 93.6641 61.3281 94.0547 60.2812 94.8359C59.2344 95.6172 58.7109 96.5625 58.7109 97.6719H54.3516C54.3516 96.4062 54.7969 95.1875 55.6875 94.0156C56.5938 92.8281 57.8125 91.8906 59.3438 91.2031C60.8906 90.5156 62.5859 90.1719 64.4297 90.1719C67.3516 90.1719 69.6406 90.9062 71.2969 92.375C72.9531 93.8281 73.8125 95.8359 73.875 98.3984V110.07C73.875 112.398 74.1719 114.25 74.7656 115.625V116H70.2188ZM63.0234 112.695C64.3828 112.695 65.6719 112.344 66.8906 111.641C68.1094 110.938 68.9922 110.023 69.5391 108.898V103.695H66.1406C60.8281 103.695 58.1719 105.25 58.1719 108.359C58.1719 109.719 58.625 110.781 59.5312 111.547C60.4375 112.312 61.6016 112.695 63.0234 112.695ZM79.6172 103.109C79.6172 99.2188 80.5391 96.0938 82.3828 93.7344C84.2266 91.3594 86.6406 90.1719 89.625 90.1719C92.5938 90.1719 94.9453 91.1875 96.6797 93.2188V80H101.016V116H97.0312L96.8203 113.281C95.0859 115.406 92.6719 116.469 89.5781 116.469C86.6406 116.469 84.2422 115.266 82.3828 112.859C80.5391 110.453 79.6172 107.312 79.6172 103.438V103.109ZM83.9531 103.602C83.9531 106.477 84.5469 108.727 85.7344 110.352C86.9219 111.977 88.5625 112.789 90.6562 112.789C93.4062 112.789 95.4141 111.555 96.6797 109.086V97.4375C95.3828 95.0469 93.3906 93.8516 90.7031 93.8516C88.5781 93.8516 86.9219 94.6719 85.7344 96.3125C84.5469 97.9531 83.9531 100.383 83.9531 103.602ZM118.289 116.469C114.852 116.469 112.055 115.344 109.898 113.094C107.742 110.828 106.664 107.805 106.664 104.023V103.227C106.664 100.711 107.141 98.4688 108.094 96.5C109.062 94.5156 110.406 92.9688 112.125 91.8594C113.859 90.7344 115.734 90.1719 117.75 90.1719C121.047 90.1719 123.609 91.2578 125.438 93.4297C127.266 95.6016 128.18 98.7109 128.18 102.758V104.562H111C111.062 107.062 111.789 109.086 113.18 110.633C114.586 112.164 116.367 112.93 118.523 112.93C120.055 112.93 121.352 112.617 122.414 111.992C123.477 111.367 124.406 110.539 125.203 109.508L127.852 111.57C125.727 114.836 122.539 116.469 118.289 116.469ZM117.75 93.7344C116 93.7344 114.531 94.375 113.344 95.6562C112.156 96.9219 111.422 98.7031 111.141 101H123.844V100.672C123.719 98.4688 123.125 96.7656 122.062 95.5625C121 94.3438 119.562 93.7344 117.75 93.7344ZM145.477 94.5312C144.82 94.4219 144.109 94.3672 143.344 94.3672C140.5 94.3672 138.57 95.5781 137.555 98V116H133.219V90.6406H137.438L137.508 93.5703C138.93 91.3047 140.945 90.1719 143.555 90.1719C144.398 90.1719 145.039 90.2812 145.477 90.5V94.5312ZM170.953 103.602C170.953 107.477 170.062 110.594 168.281 112.953C166.5 115.297 164.109 116.469 161.109 116.469C157.906 116.469 155.43 115.336 153.68 113.07L153.469 116H149.484V80H153.82V93.4297C155.57 91.2578 157.984 90.1719 161.062 90.1719C164.141 90.1719 166.555 91.3359 168.305 93.6641C170.07 95.9922 170.953 99.1797 170.953 103.227V103.602ZM166.617 103.109C166.617 100.156 166.047 97.875 164.906 96.2656C163.766 94.6562 162.125 93.8516 159.984 93.8516C157.125 93.8516 155.07 95.1797 153.82 97.8359V108.805C155.148 111.461 157.219 112.789 160.031 112.789C162.109 112.789 163.727 111.984 164.883 110.375C166.039 108.766 166.617 106.344 166.617 103.109ZM175.289 103.086C175.289 100.602 175.773 98.3672 176.742 96.3828C177.727 94.3984 179.086 92.8672 180.82 91.7891C182.57 90.7109 184.562 90.1719 186.797 90.1719C190.25 90.1719 193.039 91.3672 195.164 93.7578C197.305 96.1484 198.375 99.3281 198.375 103.297V103.602C198.375 106.07 197.898 108.289 196.945 110.258C196.008 112.211 194.656 113.734 192.891 114.828C191.141 115.922 189.125 116.469 186.844 116.469C183.406 116.469 180.617 115.273 178.477 112.883C176.352 110.492 175.289 107.328 175.289 103.391V103.086ZM179.648 103.602C179.648 106.414 180.297 108.672 181.594 110.375C182.906 112.078 184.656 112.93 186.844 112.93C189.047 112.93 190.797 112.07 192.094 110.352C193.391 108.617 194.039 106.195 194.039 103.086C194.039 100.305 193.375 98.0547 192.047 96.3359C190.734 94.6016 188.984 93.7344 186.797 93.7344C184.656 93.7344 182.93 94.5859 181.617 96.2891C180.305 97.9922 179.648 100.43 179.648 103.602ZM219.469 116C219.219 115.5 219.016 114.609 218.859 113.328C216.844 115.422 214.438 116.469 211.641 116.469C209.141 116.469 207.086 115.766 205.477 114.359C203.883 112.938 203.086 111.141 203.086 108.969C203.086 106.328 204.086 104.281 206.086 102.828C208.102 101.359 210.93 100.625 214.57 100.625H218.789V98.6328C218.789 97.1172 218.336 95.9141 217.43 95.0234C216.523 94.1172 215.188 93.6641 213.422 93.6641C211.875 93.6641 210.578 94.0547 209.531 94.8359C208.484 95.6172 207.961 96.5625 207.961 97.6719H203.602C203.602 96.4062 204.047 95.1875 204.938 94.0156C205.844 92.8281 207.062 91.8906 208.594 91.2031C210.141 90.5156 211.836 90.1719 213.68 90.1719C216.602 90.1719 218.891 90.9062 220.547 92.375C222.203 93.8281 223.062 95.8359 223.125 98.3984V110.07C223.125 112.398 223.422 114.25 224.016 115.625V116H219.469ZM212.273 112.695C213.633 112.695 214.922 112.344 216.141 111.641C217.359 110.938 218.242 110.023 218.789 108.898V103.695H215.391C210.078 103.695 207.422 105.25 207.422 108.359C207.422 109.719 207.875 110.781 208.781 111.547C209.688 112.312 210.852 112.695 212.273 112.695ZM242.18 94.5312C241.523 94.4219 240.812 94.3672 240.047 94.3672C237.203 94.3672 235.273 95.5781 234.258 98V116H229.922V90.6406H234.141L234.211 93.5703C235.633 91.3047 237.648 90.1719 240.258 90.1719C241.102 90.1719 241.742 90.2812 242.18 90.5V94.5312ZM244.664 103.109C244.664 99.2188 245.586 96.0938 247.43 93.7344C249.273 91.3594 251.688 90.1719 254.672 90.1719C257.641 90.1719 259.992 91.1875 261.727 93.2188V80H266.062V116H262.078L261.867 113.281C260.133 115.406 257.719 116.469 254.625 116.469C251.688 116.469 249.289 115.266 247.43 112.859C245.586 110.453 244.664 107.312 244.664 103.438V103.109ZM249 103.602C249 106.477 249.594 108.727 250.781 110.352C251.969 111.977 253.609 112.789 255.703 112.789C258.453 112.789 260.461 111.555 261.727 109.086V97.4375C260.43 95.0469 258.438 93.8516 255.75 93.8516C253.625 93.8516 251.969 94.6719 250.781 96.3125C249.594 97.9531 249 100.383 249 103.602Z" fill="white"/>
                </svg>
                <svg id='logout_button' width="271" height="201" viewBox="0 0 271 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class='left_ui_button' d="M270.5 100.5C270.5 200.5 190.228 200.5 135 200.5C79.7715 200.5 0.5 200.5 0.5 100.5C0.5 0.499985 79.7715 0.5 135 0.5C190.228 0.5 270.5 0.5 270.5 100.5Z" fill="#1D52DA"/>
                    <path class='button_text' d="M46.3125 117.094H67.875V122H40.2812V76.5H46.3125V117.094ZM72.2812 104.781C72.2812 101.469 72.9271 98.4896 74.2188 95.8438C75.5312 93.1979 77.3438 91.1562 79.6562 89.7188C81.9896 88.2812 84.6458 87.5625 87.625 87.5625C92.2292 87.5625 95.9479 89.1562 98.7812 92.3438C101.635 95.5312 103.062 99.7708 103.062 105.062V105.469C103.062 108.76 102.427 111.719 101.156 114.344C99.9062 116.948 98.1042 118.979 95.75 120.438C93.4167 121.896 90.7292 122.625 87.6875 122.625C83.1042 122.625 79.3854 121.031 76.5312 117.844C73.6979 114.656 72.2812 110.438 72.2812 105.188V104.781ZM78.0938 105.469C78.0938 109.219 78.9583 112.229 80.6875 114.5C82.4375 116.771 84.7708 117.906 87.6875 117.906C90.625 117.906 92.9583 116.76 94.6875 114.469C96.4167 112.156 97.2812 108.927 97.2812 104.781C97.2812 101.073 96.3958 98.0729 94.625 95.7812C92.875 93.4688 90.5417 92.3125 87.625 92.3125C84.7708 92.3125 82.4688 93.4479 80.7188 95.7188C78.9688 97.9896 78.0938 101.24 78.0938 105.469ZM108.938 104.812C108.938 99.5417 110.156 95.3542 112.594 92.25C115.031 89.125 118.26 87.5625 122.281 87.5625C126.406 87.5625 129.625 89.0208 131.938 91.9375L132.219 88.1875H137.5V121.188C137.5 125.562 136.198 129.01 133.594 131.531C131.01 134.052 127.531 135.312 123.156 135.312C120.719 135.312 118.333 134.792 116 133.75C113.667 132.708 111.885 131.281 110.656 129.469L113.656 126C116.135 129.062 119.167 130.594 122.75 130.594C125.562 130.594 127.75 129.802 129.312 128.219C130.896 126.635 131.688 124.406 131.688 121.531V118.625C129.375 121.292 126.219 122.625 122.219 122.625C118.26 122.625 115.052 121.031 112.594 117.844C110.156 114.656 108.938 110.312 108.938 104.812ZM114.75 105.469C114.75 109.281 115.531 112.281 117.094 114.469C118.656 116.635 120.844 117.719 123.656 117.719C127.302 117.719 129.979 116.062 131.688 112.75V97.3125C129.917 94.0833 127.26 92.4688 123.719 92.4688C120.906 92.4688 118.708 93.5625 117.125 95.75C115.542 97.9375 114.75 101.177 114.75 105.469ZM144.719 104.781C144.719 101.469 145.365 98.4896 146.656 95.8438C147.969 93.1979 149.781 91.1562 152.094 89.7188C154.427 88.2812 157.083 87.5625 160.062 87.5625C164.667 87.5625 168.385 89.1562 171.219 92.3438C174.073 95.5312 175.5 99.7708 175.5 105.062V105.469C175.5 108.76 174.865 111.719 173.594 114.344C172.344 116.948 170.542 118.979 168.188 120.438C165.854 121.896 163.167 122.625 160.125 122.625C155.542 122.625 151.823 121.031 148.969 117.844C146.135 114.656 144.719 110.438 144.719 105.188V104.781ZM150.531 105.469C150.531 109.219 151.396 112.229 153.125 114.5C154.875 116.771 157.208 117.906 160.125 117.906C163.062 117.906 165.396 116.76 167.125 114.469C168.854 112.156 169.719 108.927 169.719 104.781C169.719 101.073 168.833 98.0729 167.062 95.7812C165.312 93.4688 162.979 92.3125 160.062 92.3125C157.208 92.3125 154.906 93.4479 153.156 95.7188C151.406 97.9896 150.531 101.24 150.531 105.469ZM203.625 118.656C201.375 121.302 198.073 122.625 193.719 122.625C190.115 122.625 187.365 121.583 185.469 119.5C183.594 117.396 182.646 114.292 182.625 110.188V88.1875H188.406V110.031C188.406 115.156 190.49 117.719 194.656 117.719C199.073 117.719 202.01 116.073 203.469 112.781V88.1875H209.25V122H203.75L203.625 118.656ZM225.906 80V88.1875H232.219V92.6562H225.906V113.625C225.906 114.979 226.188 116 226.75 116.688C227.312 117.354 228.271 117.688 229.625 117.688C230.292 117.688 231.208 117.562 232.375 117.312V122C230.854 122.417 229.375 122.625 227.938 122.625C225.354 122.625 223.406 121.844 222.094 120.281C220.781 118.719 220.125 116.5 220.125 113.625V92.6562H213.969V88.1875H220.125V80H225.906Z" fill="white"/>
                </svg>
                <svg id='instructions_button' width="271" height="201" viewBox="0 0 271 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class='right_ui_button' d="M270.5 100.5C270.5 200.5 190.228 200.5 135 200.5C79.7715 200.5 0.5 200.5 0.5 100.5C0.5 0.499985 79.7715 0.5 135 0.5C190.228 0.5 270.5 0.5 270.5 100.5Z" fill="#45963E"/>
                    <path class='button_text'd="M16.7891 116H12.2891V81.875H16.7891V116ZM28.4609 90.6406L28.6016 93.8281C30.5391 91.3906 33.0703 90.1719 36.1953 90.1719C41.5547 90.1719 44.2578 93.1953 44.3047 99.2422V116H39.9688V99.2188C39.9531 97.3906 39.5312 96.0391 38.7031 95.1641C37.8906 94.2891 36.6172 93.8516 34.8828 93.8516C33.4766 93.8516 32.2422 94.2266 31.1797 94.9766C30.1172 95.7266 29.2891 96.7109 28.6953 97.9297V116H24.3594V90.6406H28.4609ZM65.6094 109.273C65.6094 108.102 65.1641 107.195 64.2734 106.555C63.3984 105.898 61.8594 105.336 59.6562 104.867C57.4688 104.398 55.7266 103.836 54.4297 103.18C53.1484 102.523 52.1953 101.742 51.5703 100.836C50.9609 99.9297 50.6562 98.8516 50.6562 97.6016C50.6562 95.5234 51.5312 93.7656 53.2812 92.3281C55.0469 90.8906 57.2969 90.1719 60.0312 90.1719C62.9062 90.1719 65.2344 90.9141 67.0156 92.3984C68.8125 93.8828 69.7109 95.7812 69.7109 98.0938H65.3516C65.3516 96.9062 64.8438 95.8828 63.8281 95.0234C62.8281 94.1641 61.5625 93.7344 60.0312 93.7344C58.4531 93.7344 57.2188 94.0781 56.3281 94.7656C55.4375 95.4531 54.9922 96.3516 54.9922 97.4609C54.9922 98.5078 55.4062 99.2969 56.2344 99.8281C57.0625 100.359 58.5547 100.867 60.7109 101.352C62.8828 101.836 64.6406 102.414 65.9844 103.086C67.3281 103.758 68.3203 104.57 68.9609 105.523C69.6172 106.461 69.9453 107.609 69.9453 108.969C69.9453 111.234 69.0391 113.055 67.2266 114.43C65.4141 115.789 63.0625 116.469 60.1719 116.469C58.1406 116.469 56.3438 116.109 54.7812 115.391C53.2188 114.672 51.9922 113.672 51.1016 112.391C50.2266 111.094 49.7891 109.695 49.7891 108.195H54.125C54.2031 109.648 54.7812 110.805 55.8594 111.664C56.9531 112.508 58.3906 112.93 60.1719 112.93C61.8125 112.93 63.125 112.602 64.1094 111.945C65.1094 111.273 65.6094 110.383 65.6094 109.273ZM81.4766 84.5V90.6406H86.2109V93.9922H81.4766V109.719C81.4766 110.734 81.6875 111.5 82.1094 112.016C82.5312 112.516 83.25 112.766 84.2656 112.766C84.7656 112.766 85.4531 112.672 86.3281 112.484V116C85.1875 116.312 84.0781 116.469 83 116.469C81.0625 116.469 79.6016 115.883 78.6172 114.711C77.6328 113.539 77.1406 111.875 77.1406 109.719V93.9922H72.5234V90.6406H77.1406V84.5H81.4766ZM103.555 94.5312C102.898 94.4219 102.188 94.3672 101.422 94.3672C98.5781 94.3672 96.6484 95.5781 95.6328 98V116H91.2969V90.6406H95.5156L95.5859 93.5703C97.0078 91.3047 99.0234 90.1719 101.633 90.1719C102.477 90.1719 103.117 90.2812 103.555 90.5V94.5312ZM123.219 113.492C121.531 115.477 119.055 116.469 115.789 116.469C113.086 116.469 111.023 115.688 109.602 114.125C108.195 112.547 107.484 110.219 107.469 107.141V90.6406H111.805V107.023C111.805 110.867 113.367 112.789 116.492 112.789C119.805 112.789 122.008 111.555 123.102 109.086V90.6406H127.438V116H123.312L123.219 113.492ZM144.219 112.93C145.766 112.93 147.117 112.461 148.273 111.523C149.43 110.586 150.07 109.414 150.195 108.008H154.297C154.219 109.461 153.719 110.844 152.797 112.156C151.875 113.469 150.641 114.516 149.094 115.297C147.562 116.078 145.938 116.469 144.219 116.469C140.766 116.469 138.016 115.32 135.969 113.023C133.938 110.711 132.922 107.555 132.922 103.555V102.828C132.922 100.359 133.375 98.1641 134.281 96.2422C135.188 94.3203 136.484 92.8281 138.172 91.7656C139.875 90.7031 141.883 90.1719 144.195 90.1719C147.039 90.1719 149.398 91.0234 151.273 92.7266C153.164 94.4297 154.172 96.6406 154.297 99.3594H150.195C150.07 97.7188 149.445 96.375 148.32 95.3281C147.211 94.2656 145.836 93.7344 144.195 93.7344C141.992 93.7344 140.281 94.5312 139.062 96.125C137.859 97.7031 137.258 99.9922 137.258 102.992V103.812C137.258 106.734 137.859 108.984 139.062 110.562C140.266 112.141 141.984 112.93 144.219 112.93ZM165.055 84.5V90.6406H169.789V93.9922H165.055V109.719C165.055 110.734 165.266 111.5 165.688 112.016C166.109 112.516 166.828 112.766 167.844 112.766C168.344 112.766 169.031 112.672 169.906 112.484V116C168.766 116.312 167.656 116.469 166.578 116.469C164.641 116.469 163.18 115.883 162.195 114.711C161.211 113.539 160.719 111.875 160.719 109.719V93.9922H156.102V90.6406H160.719V84.5H165.055ZM179.586 116H175.25V90.6406H179.586V116ZM174.898 83.9141C174.898 83.2109 175.109 82.6172 175.531 82.1328C175.969 81.6484 176.609 81.4062 177.453 81.4062C178.297 81.4062 178.938 81.6484 179.375 82.1328C179.812 82.6172 180.031 83.2109 180.031 83.9141C180.031 84.6172 179.812 85.2031 179.375 85.6719C178.938 86.1406 178.297 86.375 177.453 86.375C176.609 86.375 175.969 86.1406 175.531 85.6719C175.109 85.2031 174.898 84.6172 174.898 83.9141ZM185.398 103.086C185.398 100.602 185.883 98.3672 186.852 96.3828C187.836 94.3984 189.195 92.8672 190.93 91.7891C192.68 90.7109 194.672 90.1719 196.906 90.1719C200.359 90.1719 203.148 91.3672 205.273 93.7578C207.414 96.1484 208.484 99.3281 208.484 103.297V103.602C208.484 106.07 208.008 108.289 207.055 110.258C206.117 112.211 204.766 113.734 203 114.828C201.25 115.922 199.234 116.469 196.953 116.469C193.516 116.469 190.727 115.273 188.586 112.883C186.461 110.492 185.398 107.328 185.398 103.391V103.086ZM189.758 103.602C189.758 106.414 190.406 108.672 191.703 110.375C193.016 112.078 194.766 112.93 196.953 112.93C199.156 112.93 200.906 112.07 202.203 110.352C203.5 108.617 204.148 106.195 204.148 103.086C204.148 100.305 203.484 98.0547 202.156 96.3359C200.844 94.6016 199.094 93.7344 196.906 93.7344C194.766 93.7344 193.039 94.5859 191.727 96.2891C190.414 97.9922 189.758 100.43 189.758 103.602ZM218.023 90.6406L218.164 93.8281C220.102 91.3906 222.633 90.1719 225.758 90.1719C231.117 90.1719 233.82 93.1953 233.867 99.2422V116H229.531V99.2188C229.516 97.3906 229.094 96.0391 228.266 95.1641C227.453 94.2891 226.18 93.8516 224.445 93.8516C223.039 93.8516 221.805 94.2266 220.742 94.9766C219.68 95.7266 218.852 96.7109 218.258 97.9297V116H213.922V90.6406H218.023ZM255.172 109.273C255.172 108.102 254.727 107.195 253.836 106.555C252.961 105.898 251.422 105.336 249.219 104.867C247.031 104.398 245.289 103.836 243.992 103.18C242.711 102.523 241.758 101.742 241.133 100.836C240.523 99.9297 240.219 98.8516 240.219 97.6016C240.219 95.5234 241.094 93.7656 242.844 92.3281C244.609 90.8906 246.859 90.1719 249.594 90.1719C252.469 90.1719 254.797 90.9141 256.578 92.3984C258.375 93.8828 259.273 95.7812 259.273 98.0938H254.914C254.914 96.9062 254.406 95.8828 253.391 95.0234C252.391 94.1641 251.125 93.7344 249.594 93.7344C248.016 93.7344 246.781 94.0781 245.891 94.7656C245 95.4531 244.555 96.3516 244.555 97.4609C244.555 98.5078 244.969 99.2969 245.797 99.8281C246.625 100.359 248.117 100.867 250.273 101.352C252.445 101.836 254.203 102.414 255.547 103.086C256.891 103.758 257.883 104.57 258.523 105.523C259.18 106.461 259.508 107.609 259.508 108.969C259.508 111.234 258.602 113.055 256.789 114.43C254.977 115.789 252.625 116.469 249.734 116.469C247.703 116.469 245.906 116.109 244.344 115.391C242.781 114.672 241.555 113.672 240.664 112.391C239.789 111.094 239.352 109.695 239.352 108.195H243.688C243.766 109.648 244.344 110.805 245.422 111.664C246.516 112.508 247.953 112.93 249.734 112.93C251.375 112.93 252.688 112.602 253.672 111.945C254.672 111.273 255.172 110.383 255.172 109.273Z" fill="white"/>
                </svg>
            </div>
            <br/>
            {instructionOverlay && 
            <div id='instructionOverlay' className="overlay">
                <h2>Instructions</h2>
                <p>
                    The game is just like Simon where there are four colored buttons: red, yellow, green, and blue and it would
                    play a sequence of patterns that the player(s) have to re-create the pattern to go to the next round. After
                    completing each round, the difficulty will increase as both the sequences would get longer and the speed of 
                    displaying those sequences will increase. 
                </p>
                <h3>Leaderboard</h3>
                <p>
                    To see the leaderboard, press the "Leaderboard" button which will redirect you to the leaderboard page that 
                    shows the username of each player, the number of games they have played, and who has the current highest score.
                </p>
                <h3>Play Game</h3>
                <p>
                    To play the game, press the "Play" button which will redirect you to the game page where you will need
                    to input the correct sequence of colored tiles that have occurred in that round.
                </p>

            </div>
        }
        </div>
    )
}

export default RoomApp