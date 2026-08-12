import axios from 'axios';
import i18n from '../service/i18n'
import { onMounted, onBeforeUnmount } from 'vue'

export const showToast = (html: string) => {
    const toast = document.getElementById('toast');
    const text = document.getElementById('toastText');
    text.innerText = html;
    toast.classList.add('show');

    setTimeout(() => toast.classList.remove('show'), 5000);
}

export const sendMail = async (data: any) => {
    let emailBody = "<div>";

    switch (data.action) {
        case "callMe":
            emailBody += '<h3 style="font-size: 1.4em; margin-bottom: 16px">Передзвоніть мені</h3>';
            emailBody += '<p>';
            emailBody += '<span style="margin-right: 16px">Телефон:</span>';
            emailBody += `<a href="tel: ${data.phone}">${data.phone}</a>`;
            emailBody += '</p>';
            break;

        case "requestConsultation":
            emailBody += '<h3 style="font-size: 1.4em; margin-bottom: 16px">Необхідна консультація</h3>';
            emailBody += `<p><span style="display: inline-block; min-width: 72px; margin-right: 16px">Ім'я:</span><span>${data.name}</span></p>`;
            emailBody += '<p>';
            emailBody += '<span style="display: inline-block; min-width: 72px; margin-right: 16px">Телефон:</span>';
            emailBody += `<a href="tel: ${data.phone}">${data.phone}</a>`;
            emailBody += '</p>';
            emailBody += `<p><span style="display: inline-block; min-width: 72px; margin-right: 16px">Організація:</span><span>${data.org}</span></p>`;
            break;

        case "getAdmin":
            emailBody += '<h3 style="font-size: 1.4em; margin-bottom: 16px">Отримати доступ адміністратора</h3>';
            emailBody += `<p><span style="display: inline-block; min-width: 72px; margin-right: 16px">Ім'я:</span><span>${data.name}</span></p>`;
            emailBody += '<p>';
            emailBody += '<span style="display: inline-block; min-width: 72px; margin-right: 16px">Телефон:</span>';
            emailBody += `<a href="tel: ${data.phone}">${data.phone}</a>`;
            emailBody += '</p>';
            break;
    }

    emailBody += "</div>";

    try {
        await axios.post('/api/public/send_feedback', emailBody);
        showToast(i18n.global.t('email.success'))
    } catch (err) {
        console.error(err);
    }
}

export function scrollAnimate(className = 'animate-block', activeClass = 'in-view') {
    let observer
    onMounted(() => {
        const elements = document.querySelectorAll(`.${className}`)
        observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(activeClass);

                    const counters = entry.target.querySelectorAll('.countUp');
                    counters.forEach((counter: HTMLElement) => {
                        if (!counter.dataset.animated) {
                            animateCountUp(counter as HTMLElement);
                            counter.dataset.animated = 'true';
                        }
                    })
                }
            })
        },
            { threshold: 0.2 })
        elements.forEach(el => observer.observe(el))
    })
    onBeforeUnmount(() => { if (observer) observer.disconnect() })
}

export function animateCountUp(el: HTMLElement) {
    const target = parseInt(el.innerText, 10);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(now: number) {
        const progress = Math.min((now - startTime) / duration, 1);
        const value = Math.floor(start + (target - start) * progress);
        el.innerText = value.toString();
        if (progress < 1) { requestAnimationFrame(update) }
    }

    requestAnimationFrame(update)
}