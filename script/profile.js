// スキルチャートここから
    const skillChart = document.querySelector('#skill-chart');

    // 引数設定ここから
    function makeChartOption(direction, title) {
        axesOption = {
            display: true,
            suggestedMax: 5,
            suggestedMin: 0,
            callback: function(value, index, values) {
                return 'レベル' + value;
            },
            ticks: {
                stepSize: 1,
            }
        }

        if (direction == 'row') {
            axes = 'y';
            scales = {x: axesOption, y: {barPercentage: 0.5}}
        } else if (direction == 'column') {
            axes = 'x';
            scales = {y: axesOption, x: {barPercentage: 0.5}}
        } else {
            return false;
        }

        let options = {
            title: {
                display: true,
                text: title,
            },
            indexAxis: axes,
            scales: scales
        }

        return options;
    }
    // 引数設定ここまで

    let langChart = new Chart(skillChart, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: 'Python',
                    data: [3],
                    backgroundColor: "rgba(59,83,255,0.4)",
                }, {
                    label: 'HTML･CSS',
                    data: [2],
                    backgroundColor: "rgba(255,59,59,0.4)",
                }, {
                    label: 'Javascript',
                    data: [1],
                    backgroundColor: "rgba(240,255,59,0.4)",
                }, {
                    label: 'PHP',
                    data: [1],
                    backgroundColor: "rgba(191,59,255,0.4)",
                },
            ]
        },
        options: makeChartOption('column', 'プログラミングスキル')
    })

    // python
    const pythonSkillChart = document.querySelector('#Python-skill-chart');
    let pythonChart = new Chart(pythonSkillChart, {
        type: 'bar',
        data: {
            labels: ['Webアプリ開発', 'GUIツール作成', 'Webスクレイピング'],
            datasets: [
                {
                    label: 'Django',
                    data: [3, null, null],
                    skipNull: true,
                    backgroundColor: 'rgba(2,99,0,0.5)',
                },
                {
                    label: 'Flask',
                    data: [2, null, null],
                    skipNull: true,
                    backgroundColor: 'rgba(130,130,130,0.5)',
                },
                {
                    label: 'Tkinter',
                    data: [null, 3, null],
                    skipNull: true,
                    backgroundColor: 'rgba(59,83,255,0.4)',
                },
                {
                    label: 'Kivy',
                    data: [null, 3, null],
                    skipNull: true,
                    backgroundColor: 'rgba(255,59,59,0.4)',
                },
                {
                    label: 'Selenium',
                    data: [null, null, 3],
                    skipNull: true,
                    backgroundColor: 'rgba(237,113,0,0.5)',
                },
                {
                    label: 'BeautifulSoup',
                    data: [null, null, 3],
                    skipNull: true,
                    backgroundColor: 'rgba(240,255,59,0.4)',
                }
            ]
        },
        options: makeChartOption('column', 'Pythonスキル詳細')
    })

    // HTML･CSS
    const webSkillChart = document.querySelector('#HTML･CSS-skill-chart');
    let webChart = new Chart(webSkillChart, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: 'コーディング',
                    data: [4],
                    backgroundColor: 'rgba(191,59,255,0.4)',
                },
                {
                    label: 'デザイン',
                    data: [2],
                    backgroundColor: 'rgba(240,255,59,0.4)',
                },
                {
                    label: 'レスポンシブ対応',
                    data: [3],
                    backgroundColor: 'rgba(255,59,59,0.4)',
                },
            ]
        },
        options: makeChartOption('column', 'HTML･CSSスキル詳細')
    })

    // JavaScript
    const jsSkillChart = document.querySelector('#JavaScript-skill-chart');
    let jsChart = new Chart(jsSkillChart, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: 'Node.js',
                    data: [0],
                    backgroundColor: 'rgba(191,59,255,0.4)',
                },
                {
                    label: 'アニメーション',
                    data: [2],
                    backgroundColor: 'rgba(240,255,59,0.4)',
                },
            ]
        },
        options: makeChartOption('column', 'JavaScriptスキル詳細')
    })

    // PHP
    const phpSkillChart = document.querySelector('#PHP-skill-chart');
    let phpChart = new Chart(phpSkillChart, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: 'バックエンド処理',
                    data: [1],
                    backgroundColor: 'rgba(191,59,255,0.4)',
                },
                {
                    label: 'WordPressテーマ作成',
                    data: [2],
                    backgroundColor: 'rgba(240,255,59,0.4)',
                },
            ]
        },
        options: makeChartOption('column', 'JavaScriptスキル詳細')
    })
// スキルチャートここまで






// 言語ボタンここから
    const langBtnList = document.querySelectorAll('.icon-area li');
    function langBtnClick(target) {
        let detailTarget;
        let activeClassName;
        // active -> none (targetの切り替えのみでよい)
        if (target.classList.contains('active')) {
            target.classList.remove('active');
            activeClassName = target.className.split(' ')[0];
            detailTarget = document.querySelector('.language-detail-content' + '.' + activeClassName);
            detailTarget.classList.remove('active');
        // none -> active (targetの切り替えと他要素のremoveが必要)
        } else {
            for (langBtn of langBtnList) {
                if (langBtn.classList.contains('active')) {
                    langBtn.classList.remove('active');
                    activeClassName = langBtn.className.split(' ')[0];
                    detailTarget = document.querySelector('.language-detail-content' + '.' + activeClassName);
                    detailTarget.classList.remove('active');
                }
            }
            target.classList.add('active');
            activeClassName = target.className.split(' ')[0];
            detailTarget = document.querySelector('.language-detail-content' + '.' + activeClassName);
            detailTarget.classList.add('active');
        }
    }

    for (let langBtn of langBtnList) {
        langBtn.addEventListener('click', function() {
            langBtnClick(langBtn);
        }, false)
    }
// 言語ボタンここまで
