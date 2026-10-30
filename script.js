/* =====================================================
   THỎ NGỌC THỬ THÁCH - GIẢI CỨU CHÚ CUỘI
   SCRIPT.JS - PHIÊN BẢN 12 CÂU NÂNG CAO
===================================================== */


/* =====================================================
   1. DỮ LIỆU 12 CÂU HỎI
===================================================== */

const questions = [

    {
        question:
            "Một quốc gia không xảy ra xung đột quân sự, không bị xâm phạm lãnh thổ nhưng liên tục đối mặt với khủng hoảng năng lượng, gián đoạn chuỗi cung ứng, tấn công mạng vào cơ sở hạ tầng trọng yếu và suy giảm an ninh lương thực. Nhận định nào phản ánh đúng nhất bản chất tình hình?",

        answers: [
            "Quốc gia vẫn được xem là có an ninh toàn diện vì chủ quyền và lãnh thổ chưa bị xâm phạm.",
            "Đây là biểu hiện của sự chuyển dịch hoàn toàn từ an ninh truyền thống sang an ninh phi truyền thống.",
            "Quốc gia có thể duy trì trạng thái không có chiến tranh nhưng vẫn mất ổn định an ninh do các yếu tố phi quân sự làm suy yếu năng lực tự chủ và sức chống chịu quốc gia.",
            "Những nguy cơ trên chỉ được xem là vấn đề phát triển kinh tế, không thuộc phạm vi an ninh quốc gia."
        ],

        correct: 2,

        explanation:
            "Một quốc gia có thể không xảy ra chiến tranh nhưng vẫn mất ổn định an ninh do các yếu tố phi quân sự làm suy yếu năng lực tự chủ và sức chống chịu quốc gia."
    },


    {
        question:
            "Một dịch bệnh xuất hiện tại một quốc gia, sau đó lan rộng ra khu vực, làm gián đoạn thương mại quốc tế, gây thiếu hụt lao động và tạo ra bất ổn xã hội. Điều gì giải thích chính xác nhất quá trình chuyển hóa từ một nguy cơ y tế thành thách thức an ninh đa chiều?",

        answers: [
            "Dịch bệnh tự động trở thành vấn đề an ninh quân sự khi số người mắc bệnh vượt quá khả năng điều trị.",
            "Sự phụ thuộc lẫn nhau giữa các quốc gia và tính liên kết giữa các hệ thống kinh tế, xã hội khiến một nguy cơ ban đầu có thể tạo ra hiệu ứng dây chuyền trên nhiều lĩnh vực.",
            "Mọi dịch bệnh có khả năng lây lan quốc tế đều đồng nghĩa với việc chủ quyền quốc gia bị đe dọa trực tiếp.",
            "Nguyên nhân chủ yếu là do các quốc gia chưa đầu tư đủ ngân sách cho lực lượng quốc phòng."
        ],

        correct: 1,

        explanation:
            "Sự phụ thuộc lẫn nhau giữa các quốc gia và tính liên kết giữa các hệ thống kinh tế, xã hội khiến một nguy cơ ban đầu có thể tạo ra hiệu ứng dây chuyền trên nhiều lĩnh vực."
    },


    {
        question:
            "Giả sử một quốc gia phải lựa chọn giữa hai phương án:\n\n- Phương án 1: Tăng cường đáng kể ngân sách quốc phòng để nâng cao khả năng phòng thủ quân sự.\n- Phương án 2: Phân bổ nguồn lực cân bằng hơn giữa quốc phòng, an ninh mạng, y tế, năng lượng và bảo vệ môi trường.\n\nTrong điều kiện ngân sách có hạn, nhận định nào có cơ sở chiến lược nhất?",

        answers: [
            "Phương án 1 luôn tối ưu vì các nguy cơ quân sự có mức độ nguy hiểm cao hơn mọi nguy cơ phi quân sự.",
            "Phương án 2 luôn đúng trong mọi hoàn cảnh vì an ninh phi truyền thống đã trở thành nguy cơ chủ yếu trên toàn thế giới.",
            "Việc lựa chọn phải căn cứ vào đánh giá tổng thể về xác suất, mức độ thiệt hại, tính cấp bách và khả năng lan truyền của từng nguy cơ, đồng thời duy trì năng lực phòng thủ cần thiết.",
            "Hai phương án không thể kết hợp vì ngân sách quốc phòng và ngân sách bảo đảm an ninh phi truyền thống có mục tiêu hoàn toàn đối lập."
        ],

        correct: 2,

        explanation:
            "Việc lựa chọn phải căn cứ vào đánh giá tổng thể về xác suất, mức độ thiệt hại, tính cấp bách và khả năng lan truyền của từng nguy cơ, đồng thời duy trì năng lực phòng thủ cần thiết."
    },


    {
        question:
            "Một cuộc khủng hoảng môi trường kéo dài khiến nền kinh tế suy thoái, thất nghiệp gia tăng, bất ổn xã hội xuất hiện và năng lực kiểm soát biên giới của quốc gia suy giảm. Từ tình huống này, có thể rút ra kết luận nào?",

        answers: [
            "Nguy cơ an ninh phi truyền thống có thể tạo ra những điều kiện làm gia tăng nguy cơ an ninh truyền thống mà không cần trực tiếp sử dụng vũ lực.",
            "An ninh môi trường chỉ liên quan đến chất lượng sống, không ảnh hưởng đến năng lực bảo vệ chủ quyền.",
            "Bất ổn xã hội luôn là nguyên nhân trực tiếp dẫn đến chiến tranh giữa các quốc gia.",
            "Khi kinh tế suy thoái, các nguy cơ an ninh phi truyền thống sẽ tự động chuyển thành nguy cơ quân sự."
        ],

        correct: 0,

        explanation:
            "Nguy cơ an ninh phi truyền thống có thể tạo ra những điều kiện làm gia tăng nguy cơ an ninh truyền thống mà không cần trực tiếp sử dụng vũ lực."
    },


    {
        question:
            "Một quốc gia A phụ thuộc lớn vào nguồn cung năng lượng từ quốc gia B. Khi quan hệ ngoại giao giữa hai nước căng thẳng, quốc gia B hạn chế xuất khẩu năng lượng. Đồng thời, các cuộc tấn công mạng nhằm vào hệ thống điều phối năng lượng của A khiến tình trạng thiếu hụt trở nên nghiêm trọng.\n\nĐánh giá nào chính xác nhất về tình huống trên?",

        answers: [
            "Đây hoàn toàn là an ninh truyền thống vì việc hạn chế xuất khẩu năng lượng có liên quan đến quan hệ giữa hai quốc gia.",
            "Đây hoàn toàn là an ninh phi truyền thống vì năng lượng và không gian mạng không thuộc lĩnh vực quân sự.",
            "Đây là tình huống giao thoa giữa các thách thức an ninh; sự phụ thuộc năng lượng, căng thẳng quan hệ quốc tế và nguy cơ an ninh mạng có thể kết hợp làm suy giảm an ninh quốc gia.",
            "Đây chỉ là vấn đề thương mại song phương và có thể giải quyết hoàn toàn bằng các biện pháp kinh tế."
        ],

        correct: 2,

        explanation:
            "Đây là tình huống giao thoa giữa các thách thức an ninh; sự phụ thuộc năng lượng, căng thẳng quan hệ quốc tế và nguy cơ an ninh mạng có thể kết hợp làm suy giảm an ninh quốc gia."
    },


    {
        question:
            "Một quốc gia xây dựng hệ thống cảnh báo thiên tai hiện đại, có khả năng dự báo chính xác các hiện tượng thời tiết cực đoan. Tuy nhiên, khi thiên tai xảy ra, hệ thống giao thông, y tế, thông tin liên lạc và cứu trợ vẫn bị tê liệt.\n\nNguyên nhân nào phản ánh đúng nhất hạn chế trong chiến lược bảo đảm an ninh?",

        answers: [
            "Công nghệ dự báo không có giá trị thực tiễn vì thiên tai vốn không thể kiểm soát.",
            "Quốc gia mới chú trọng năng lực nhận diện nguy cơ nhưng chưa xây dựng đầy đủ năng lực ứng phó, thích nghi và phục hồi sau khủng hoảng.",
            "Thiên tai chỉ có thể được xử lý hiệu quả bằng cách tăng cường lực lượng quân sự.",
            "Hệ thống cảnh báo càng hiện đại thì thiệt hại do thiên tai càng lớn vì người dân phụ thuộc vào công nghệ."
        ],

        correct: 1,

        explanation:
            "Quốc gia mới chú trọng năng lực nhận diện nguy cơ nhưng chưa xây dựng đầy đủ năng lực ứng phó, thích nghi và phục hồi sau khủng hoảng."
    },


    {
        question:
            "Trong một cuộc khủng hoảng an ninh phi truyền thống xuyên biên giới, quốc gia X có tiềm lực kinh tế và công nghệ mạnh nhưng từ chối hợp tác quốc tế, tự triển khai các biện pháp ứng phó. Quốc gia Y có nguồn lực hạn chế hơn nhưng chủ động chia sẻ dữ liệu, phối hợp chuyên gia và tham gia cơ chế hợp tác khu vực.\n\nNhận định nào có tính thuyết phục nhất?",

        answers: [
            "Quốc gia X chắc chắn kiểm soát khủng hoảng tốt hơn vì tiềm lực quốc gia là yếu tố quyết định duy nhất.",
            "Quốc gia Y có thể nâng cao hiệu quả ứng phó nhờ hợp tác, nhưng vẫn cần củng cố năng lực nội tại để bảo đảm tính chủ động và khả năng tự bảo vệ.",
            "Quốc gia Y đã đánh mất quyền tự chủ khi chia sẻ dữ liệu và phối hợp với các quốc gia khác.",
            "Hợp tác quốc tế chỉ có ý nghĩa sau khi một quốc gia đã tự giải quyết hoàn toàn khủng hoảng."
        ],

        correct: 1,

        explanation:
            "Quốc gia Y có thể nâng cao hiệu quả ứng phó nhờ hợp tác, nhưng vẫn cần củng cố năng lực nội tại để bảo đảm tính chủ động và khả năng tự bảo vệ."
    },


    {
        question:
            "Một quốc gia đối mặt đồng thời với ba nguy cơ:\n\n- Biến đổi khí hậu làm suy giảm nguồn nước và an ninh lương thực.\n- Tấn công mạng nhằm vào hệ thống quản lý cơ sở hạ tầng trọng yếu.\n- Cạnh tranh chiến lược giữa các nước lớn làm gia tăng sức ép về kinh tế và quốc phòng.\n\nNếu chỉ được lựa chọn một định hướng xây dựng chiến lược an ninh dài hạn, phương án nào có tính toàn diện nhất?",

        answers: [
            "Ưu tiên tuyệt đối hiện đại hóa quân đội để tạo ưu thế răn đe, từ đó hạn chế các nguy cơ còn lại.",
            "Tập trung phát triển kinh tế vì tiềm lực kinh tế đủ mạnh sẽ tự động giải quyết được các thách thức an ninh.",
            "Phân chia các nguy cơ thành từng lĩnh vực độc lập, giao cho từng cơ quan xử lý riêng biệt để tránh chồng chéo trách nhiệm.",
            "Xây dựng chiến lược an ninh tổng hợp, kết hợp năng lực quốc phòng, an ninh mạng, an ninh kinh tế, quản trị tài nguyên, khả năng chống chịu xã hội và hợp tác quốc tế."
        ],

        correct: 3,

        explanation:
            "Cần xây dựng chiến lược an ninh tổng hợp, kết hợp năng lực quốc phòng, an ninh mạng, an ninh kinh tế, quản trị tài nguyên, khả năng chống chịu xã hội và hợp tác quốc tế."
    },


    {
        question:
            "Có ý kiến cho rằng: \"An ninh phi truyền thống chủ yếu bắt nguồn từ các vấn đề nội tại của mỗi quốc gia, vì vậy việc giải quyết cần tập trung vào chính sách trong nước thay vì hợp tác quốc tế.\"\n\nĐâu là lập luận phản biện có sức thuyết phục nhất?",

        answers: [
            "Nhận định đúng vì mỗi quốc gia đều có chủ quyền và trách nhiệm tự giải quyết các vấn đề phát sinh trong lãnh thổ.",
            "Nhận định chưa đầy đủ vì nhiều nguy cơ có nguồn gốc nội địa nhưng có thể lan truyền qua biên giới; do đó cần kết hợp năng lực quốc gia với hợp tác quốc tế.",
            "Nhận định sai vì mọi nguy cơ an ninh phi truyền thống đều có nguồn gốc từ bên ngoài lãnh thổ.",
            "Nhận định đúng vì hợp tác quốc tế chỉ làm tăng sự phụ thuộc giữa các quốc gia."
        ],

        correct: 1,

        explanation:
            "Nhiều nguy cơ có nguồn gốc nội địa nhưng có thể lan truyền qua biên giới; do đó cần kết hợp năng lực quốc gia với hợp tác quốc tế."
    },


    {
        question:
            "Một quốc gia có hệ thống phòng thủ quân sự rất mạnh nhưng phần lớn dữ liệu quan trọng, công nghệ điều hành và nguồn cung thiết yếu lại phụ thuộc vào các nhà cung cấp nước ngoài. Khi xảy ra khủng hoảng quốc tế, các nguồn cung này bị gián đoạn.\n\nBài học chiến lược quan trọng nhất là gì?",

        answers: [
            "Sức mạnh quân sự không còn cần thiết trong bối cảnh toàn cầu hóa.",
            "Phụ thuộc kinh tế và công nghệ luôn dẫn đến mất chủ quyền quốc gia.",
            "Bảo đảm an ninh quốc gia cần chú trọng cả năng lực tự chủ chiến lược, khả năng đa dạng hóa nguồn cung và sức chống chịu của các hệ thống thiết yếu.",
            "Chỉ cần mở rộng quan hệ thương mại với nhiều quốc gia là có thể loại bỏ hoàn toàn nguy cơ phụ thuộc."
        ],

        correct: 2,

        explanation:
            "Bảo đảm an ninh quốc gia cần chú trọng cả năng lực tự chủ chiến lược, khả năng đa dạng hóa nguồn cung và sức chống chịu của các hệ thống thiết yếu."
    },


];


/* =====================================================
   2. TRẠNG THÁI TRÒ CHƠI
===================================================== */

let currentQuestion = 0;
let correctCount = 0;
let isAnswered = false;

let audioContext = null;

let waitingFireworksTimer = null;
let flowerThrottle = false;

const answerLetters = ["A", "B", "C", "D"];


/* =====================================================
   3. LẤY PHẦN TỬ HTML
===================================================== */

function getElement(id) {
    return document.getElementById(id);
}


/* =====================================================
   4. NHẠC CHỜ
===================================================== */

function getWaitingMusic() {
    return getElement("waitingMusic");
}

function startWaitingMusic() {

    const waitingMusic = getWaitingMusic();
    const gameMusic = getGameMusic();

    if (!waitingMusic) return;

    if (gameMusic) {
        gameMusic.pause();
        gameMusic.currentTime = 0;
    }

    waitingMusic.volume = 0.28;

    const promise = waitingMusic.play();

    if (promise !== undefined) {
        promise.catch(() => {
            console.log("Trình duyệt đang chặn tự động phát nhạc chờ.");
        });
    }
}

function stopWaitingMusic() {

    const waitingMusic = getWaitingMusic();

    if (!waitingMusic) return;

    waitingMusic.pause();
    waitingMusic.currentTime = 0;
}


/* =====================================================
   5. NHẠC KHI CHƠI
===================================================== */

function getGameMusic() {
    return getElement("gameMusic");
}

function startGameMusic() {

    const gameMusic = getGameMusic();

    if (!gameMusic) return;

    stopWaitingMusic();

    gameMusic.volume = 0.28;

    const promise = gameMusic.play();

    if (promise !== undefined) {
        promise.catch(() => {
            console.log("Trình duyệt đang chặn tự động phát nhạc chơi.");
        });
    }
}

function stopGameMusic() {

    const gameMusic = getGameMusic();

    if (!gameMusic) return;

    gameMusic.pause();
    gameMusic.currentTime = 0;
}


/* =====================================================
   6. ÂM THANH ĐÚNG / SAI / CHIẾN THẮNG
===================================================== */

function playSound(type) {

    try {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const sounds = {

            correct: {
                notes: [880, 1175, 1568],
                duration: 0.22,
                volume: 0.12,
                wave: "sine"
            },

            wrong: {
                notes: [190, 130],
                duration: 0.25,
                volume: 0.12,
                wave: "sawtooth"
            },

            victory: {
                notes: [523, 659, 784, 1046, 1318],
                duration: 0.3,
                volume: 0.13,
                wave: "sine"
            }

        };

        const sound = sounds[type];

        if (!sound) return;

        sound.notes.forEach((frequency, index) => {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            const startTime =
                audioContext.currentTime +
                index * 0.13;

            oscillator.type = sound.wave;

            oscillator.frequency.setValueAtTime(
                frequency,
                startTime
            );

            gain.gain.setValueAtTime(
                0.001,
                startTime
            );

            gain.gain.exponentialRampToValueAtTime(
                sound.volume,
                startTime + 0.03
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                startTime + sound.duration
            );

            oscillator.connect(gain);
            gain.connect(audioContext.destination);

            oscillator.start(startTime);

            oscillator.stop(
                startTime + sound.duration
            );

        });

    } catch (error) {

        console.warn(
            "Không phát được âm thanh:",
            error
        );

    }

}


/* =====================================================
   7. PHÁO HOA
===================================================== */

function createFirework() {

    const effects = getElement("effects");

    if (!effects) return;

    const centerX =
        10 + Math.random() * 80;

    const centerY =
        15 + Math.random() * 45;

    const colors = [
        "#ffe38a",
        "#ff8fc4",
        "#83ffd1",
        "#bba4ff",
        "#ffffff",
        "#ffae70"
    ];

    for (let i = 0; i < 28; i++) {

        const spark =
            document.createElement("div");

        spark.className = "spark";

        const angle =
            Math.PI * 2 * i / 28;

        const distance =
            65 + Math.random() * 95;

        spark.style.left =
            centerX + "%";

        spark.style.top =
            centerY + "%";

        spark.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        spark.style.setProperty(
            "--x",
            Math.cos(angle) * distance + "px"
        );

        spark.style.setProperty(
            "--y",
            Math.sin(angle) * distance + "px"
        );

        effects.appendChild(spark);

        setTimeout(() => {
            spark.remove();
        }, 1400);

    }

}


function fireworks() {

    createFirework();

    setTimeout(
        createFirework,
        250
    );

    setTimeout(
        createFirework,
        500
    );

    setTimeout(
        createFirework,
        750
    );

}


/* =====================================================
   8. PHÁO HOA Ở MÀN HÌNH CHỜ
===================================================== */

function startWaitingFireworks() {

    stopWaitingFireworks();

    fireworks();

    waitingFireworksTimer =
        setInterval(() => {

            fireworks();

        }, 3500);

}


function stopWaitingFireworks() {

    if (waitingFireworksTimer) {

        clearInterval(
            waitingFireworksTimer
        );

        waitingFireworksTimer = null;

    }

}


/* =====================================================
   9. PHÁO GIẤY
===================================================== */

function createConfetti() {

    const effects =
        getElement("effects");

    if (!effects) return;

    const colors = [
        "#ffe38a",
        "#ff8fc4",
        "#83ffd1",
        "#bba4ff",
        "#ffffff"
    ];

    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        piece.style.animationDelay =
            Math.random() * 1.2 + "s";

        effects.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4200);

    }

}


/* =====================================================
   10. HOA RƠI THEO CHUỘT
===================================================== */

function createFlowerAt(x, y) {

    const container =
        getElement("flowerTrail");

    if (!container) return;

    const flower =
        document.createElement("span");

    flower.className =
        "mouse-flower";

    const flowers = [
        "🌸",
        "🌼",
        "🌺",
        "🌷",
        "🌻"
    ];

    flower.textContent =
        flowers[
            Math.floor(
                Math.random() *
                flowers.length
            )
        ];

    flower.style.left =
        x + "px";

    flower.style.top =
        y + "px";

    flower.style.setProperty(
        "--fall-x",
        ((Math.random() - 0.5) * 100) + "px"
    );

    flower.style.setProperty(
        "--rotate",
        ((Math.random() - 0.5) * 720) + "deg"
    );

    flower.style.fontSize =
        (12 + Math.random() * 12) + "px";

    container.appendChild(flower);

    setTimeout(() => {

        flower.remove();

    }, 1800);

}


function handleMouseMove(event) {

    if (flowerThrottle) return;

    flowerThrottle = true;

    createFlowerAt(
        event.clientX,
        event.clientY
    );

    setTimeout(() => {

        flowerThrottle = false;

    }, 70);

}


/* =====================================================
   11. THANH TIẾN ĐỘ
===================================================== */

function updateProgress() {

    const progressText =
        getElement("progressText");

    const progressBar =
        getElement("progressBar");

    if (progressText) {

        progressText.textContent =
            `Chú Cuội: ${correctCount} / ${questions.length} 🌙`;

    }

    if (progressBar) {

        const percentage =
            (correctCount / questions.length) *
            100;

        progressBar.style.width =
            percentage + "%";

    }

}


/* =====================================================
   12. HIỂN THỊ CÂU HỎI
===================================================== */

function renderQuestion() {

    isAnswered = false;

    const question =
        questions[currentQuestion];

    getElement("questionCount").textContent =
        `Câu ${currentQuestion + 1} / ${questions.length}`;

    getElement("questionText").textContent =
        question.question;

    getElement("feedback").className =
        "feedback";

    getElement("feedback").textContent =
        "";

    getElement("comic")
        .classList
        .remove("show");

    getElement("cuoiStatus").textContent =
        "🌳🧑🏻‍🌾";

    getElement("nextBtn")
        .classList
        .add("hidden");

    const answersBox =
        getElement("answers");

    answersBox.innerHTML = "";

    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");

            button.type = "button";

            button.className =
                "answer";

            const letter =
                document.createElement("span");

            letter.className =
                "letter";

            letter.textContent =
                answerLetters[index];

            const text =
                document.createElement("span");

            text.textContent =
                answer;

            button.appendChild(letter);

            button.appendChild(text);

            button.addEventListener(
                "click",
                function () {

                    checkAnswer(
                        index,
                        button
                    );

                }
            );

            answersBox.appendChild(
                button
            );

        }
    );

    updateProgress();

}


/* =====================================================
   13. PHẢN HỒI
===================================================== */

function showFeedback(
    type,
    title,
    message
) {

    const feedback =
        getElement("feedback");

    feedback.className =
        `feedback show ${type}`;

    feedback.replaceChildren();

    const heading =
        document.createElement("strong");

    heading.textContent =
        title;

    const explanation =
        document.createElement("p");

    explanation.style.marginTop =
        "10px";

    explanation.textContent =
        message;

    feedback.appendChild(
        heading
    );

    feedback.appendChild(
        explanation
    );

}


/* =====================================================
   14. KIỂM TRA ĐÁP ÁN
===================================================== */

function checkAnswer(
    selectedIndex,
    selectedButton
) {

    if (isAnswered) return;

    const question =
        questions[currentQuestion];

    /* -------------------------
       ĐÁP ÁN ĐÚNG
    ------------------------- */

    if (
        selectedIndex ===
        question.correct
    ) {

        isAnswered = true;

        correctCount++;

        selectedButton.classList.add(
            "correct"
        );

        const allButtons =
            getElement("answers")
                .querySelectorAll(".answer");

        allButtons.forEach(
            button => {

                button.disabled = true;

            }
        );

        playSound("correct");

        fireworks();

        createConfetti();

        showFeedback(
            "good",
            "✨ TING! CHÍNH XÁC!",
            "Giải thích: " +
            question.explanation
        );

        getElement(
            "cuoiStatus"
        ).textContent =
            "🧑🏻‍🌾🎉";

        updateProgress();

        if (
            currentQuestion ===
            questions.length - 1
        ) {

            getElement(
                "nextBtn"
            ).textContent =
                "🏆 ĐOÀN TỤ VỚI CHỊ HẰNG";

        } else {

            getElement(
                "nextBtn"
            ).textContent =
                "CÂU TIẾP THEO ➜";

        }

        getElement(
            "nextBtn"
        )
            .classList
            .remove("hidden");

    }


    /* -------------------------
       ĐÁP ÁN SAI
    ------------------------- */

    else {

        selectedButton.classList.add(
            "wrong"
        );

        playSound("wrong");

        const comic =
            getElement("comic");

        comic.classList.remove(
            "show"
        );

        void comic.offsetWidth;

        comic.classList.add(
            "show"
        );

        getElement(
            "cuoiStatus"
        ).textContent =
            "🧑🏻‍🌾😵";

        const wrongExplanations = [

            "Phương án A chưa phản ánh đúng bản chất và yêu cầu của tình huống.",

            "Phương án B chưa phân biệt chính xác đặc điểm của vấn đề.",

            "Phương án C chưa phù hợp với yêu cầu của câu hỏi.",

            "Phương án D chưa phản ánh đúng nội dung cần lựa chọn."

        ];

        showFeedback(
            "bad",
            "😅 È! CHƯA CHÍNH XÁC!",
            "🐇 Thỏ Ngọc: “Ôi không! Chú Cuội bị bánh kem trúng rồi!” " +
            wrongExplanations[selectedIndex] +
            " Hãy thử suy nghĩ lại nhé! Bạn được chọn lại không giới hạn."
        );

        setTimeout(() => {

            selectedButton.classList.remove(
                "wrong"
            );

        }, 650);

    }

}


/* =====================================================
   15. CÂU TIẾP THEO
===================================================== */

function nextQuestion() {

    if (!isAnswered) return;

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        renderQuestion();

    } else {

        showVictory();

    }

}


/* =====================================================
   16. VIDEO KẾT THÚC
===================================================== */

function prepareEndingVideo() {

    const video =
        getElement("endingVideo");

    if (!video) return;

    video.currentTime = 0;

}


function playEndingVideo() {

    const video =
        getElement("endingVideo");

    if (!video) return;

    video.currentTime = 0;

    const promise =
        video.play();

    if (promise !== undefined) {

        promise.catch(() => {

            console.log(
                "Video kết thúc cần người dùng bấm Play."
            );

        });

    }

}


/* =====================================================
   17. MÀN HÌNH CHIẾN THẮNG
===================================================== */

function showVictory() {

    stopGameMusic();

    getElement("gameScreen")
        .classList
        .add("hidden");

    getElement("endScreen")
        .classList
        .remove("hidden");

    getElement("startScreen")
        .classList
        .add("hidden");

    playSound("victory");

    fireworks();

    setTimeout(
        fireworks,
        1000
    );

    setTimeout(
        createConfetti,
        500
    );

    prepareEndingVideo();

    setTimeout(
        playEndingVideo,
        400
    );

}


/* =====================================================
   18. BẮT ĐẦU GAME
===================================================== */

function startGame() {

    currentQuestion = 0;

    correctCount = 0;

    isAnswered = false;

    stopWaitingFireworks();

    stopWaitingMusic();

    startGameMusic();

    getElement("startScreen")
        .classList
        .add("hidden");

    getElement("endScreen")
        .classList
        .add("hidden");

    getElement("gameScreen")
        .classList
        .remove("hidden");

    getElement("progressBar")
        .style
        .width = "0%";

    renderQuestion();

}


/* =====================================================
   19. CHƠI LẠI
===================================================== */

function restartGame() {

    startGame();

}


/* =====================================================
   20. KHI TRÌNH DUYỆT CHẶN AUTOPLAY
===================================================== */

function enableWaitingMusicAfterInteraction() {

    const startMusic =
        () => {

            const startScreen =
                getElement("startScreen");

            if (
                startScreen &&
                !startScreen.classList.contains("hidden")
            ) {

                startWaitingMusic();

            }

            document.removeEventListener(
                "pointerdown",
                startMusic
            );

            document.removeEventListener(
                "keydown",
                startMusic
            );

        };

    document.addEventListener(
        "pointerdown",
        startMusic
    );

    document.addEventListener(
        "keydown",
        startMusic
    );

}


/* =====================================================
   21. KHỞI TẠO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* Nút bắt đầu */

        const startBtn =
            getElement("startBtn");

        if (startBtn) {

            startBtn.addEventListener(
                "click",
                startGame
            );

        }


        /* Nút câu tiếp theo */

        const nextBtn =
            getElement("nextBtn");

        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                nextQuestion
            );

        }


        /* Nút chơi lại */

        const restartBtn =
            getElement("restartBtn");

        if (restartBtn) {

            restartBtn.addEventListener(
                "click",
                restartGame
            );

        }


        /* Nút chơi lại ở màn hình kết thúc */

        const playAgainBtn =
            getElement("playAgainBtn");

        if (playAgainBtn) {

            playAgainBtn.addEventListener(
                "click",
                restartGame
            );

        }


        /* Pháo hoa màn hình chờ */

        startWaitingFireworks();


        /* Nhạc chờ */

        startWaitingMusic();


        /* Hoa rơi theo chuột */

        document.addEventListener(
            "mousemove",
            handleMouseMove
        );


        /* Nếu video kết thúc */

        const endingVideo =
            getElement("endingVideo");

        if (endingVideo) {

            endingVideo.addEventListener(
                "ended",
                function () {

                    fireworks();

                }
            );

        }


        /* Hỗ trợ autoplay */

        enableWaitingMusicAfterInteraction();

    }
);


/* =====================================================
   22. DỌN DẸP KHI ĐÓNG TRANG
===================================================== */

window.addEventListener(
    "beforeunload",
    function () {

        stopWaitingFireworks();

        stopWaitingMusic();

        stopGameMusic();

    }
);
