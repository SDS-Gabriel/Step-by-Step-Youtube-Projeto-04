const btn = document.querySelector('.btn');
        const sidebar = document.querySelector('.sidebar');
        const featBtn = document.querySelector('.feat-btn');
        const servBtn = document.querySelector('.serv-btn');
        const featShow = document.querySelector('.feat-show');
        const servShow = document.querySelector('.serv-show');

        btn.addEventListener('click', () => {
            sidebar.classList.toggle('show');
            btn.classList.toggle('click');
        });

        featBtn.addEventListener('click', (e) => {
            e.preventDefault();
            featShow.classList.toggle('show');
            document.querySelector('.first').classList.toggle('rotate');
        });

        servBtn.addEventListener('click', (e) => {
            e.preventDefault();
            servShow.classList.toggle('show');
            document.querySelector('.second').classList.toggle('rotate');
        });