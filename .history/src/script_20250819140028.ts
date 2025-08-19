// 타입 정의
interface NavigationElement extends HTMLElement {
    dataset: DOMStringMap & {
        section?: string;
    };
}

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    type?: string;
}

interface NewsItem {
    date: string;
    title: string;
    content: string;
    isImportant?: boolean;
}

interface CompanyInfo {
    name: string;
    address: string;
    phone: string;
    email: string;
    businessHours: string;
    established: string;
    registrationNumber: string;
}

// 전역 상태 관리 클래스
class WebsiteState {
    private currentSection: string = 'home';
    private isDarkMode: boolean = false;
    
    getCurrentSection(): string {
        return this.currentSection;
    }
    
    setCurrentSection(section: string): void {
        this.currentSection = section;
        // URL 해시 업데이트
        window.history.replaceState(null, '', `#${section}`);
    }
    
    toggleDarkMode(): void {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        localStorage.setItem('darkMode', this.isDarkMode.toString());
    }
    
    getDarkMode(): boolean {
        return this.isDarkMode;
    }
    
    initializeDarkMode(): void {
        const savedTheme = localStorage.getItem('darkMode');
        if (savedTheme === 'true') {
            this.isDarkMode = true;
            document.body.classList.add('dark-mode');
        }
    }
}

// 회사 정보 상수
const COMPANY_INFO: CompanyInfo = {
    name: 'Korea AI Transformation',
    address: '서울특별시 강남구 테헤란로 123길 45',
    phone: '02-1234-5678',
    email: 'info@k-ax.com',
    businessHours: '평일 09:00 - 18:00',
    established: '2024.08.15',
    registrationNumber: '123-45-67890'
};

// 뉴스 데이터 (법인 설립 공지 포함)
const NEWS_DATA: NewsItem[] = [
    {
        date: '2025.08.19',
        title: '🎉 K-AX 법인 설립 완료 공지',
        content: 'Korea AI Transformation(K-AX)가 정식 법인으로 설립되었습니다. 법인등록번호: 123-45-67890으로 더욱 신뢰할 수 있는 AI 솔루션 서비스를 제공해드리겠습니다. 앞으로도 혁신적인 AI 기술로 고객 여러분의 비즈니스 성장을 함께하겠습니다.',
        isImportant: true
    },
    {
        date: '2025.08.19',
        title: '🌐 K-AX 공식 홈페이지 오픈',
        content: 'Korea AI Transformation의 공식 홈페이지가 오픈되었습니다. 다양한 AI 솔루션과 서비스 정보를 확인하실 수 있으며, 온라인 문의도 가능합니다. www.k-ax.com에서 만나보세요.',
        isImportant: false
    },
    {
        date: '2025.08.15',
        title: '🚀 AI 솔루션 베타 서비스 시작',
        content: '혁신적인 AI 솔루션의 베타 서비스를 시작합니다. 자연어 처리, 컴퓨터 비전, 예측 분석 등 다양한 분야의 AI 기술을 체험해보세요. 관심 있으신 분들은 언제든 문의해주세요.',
        isImportant: false
    },
    {
        date: '2025.08.10',
        title: '🤝 기업 파트너십 프로그램 런칭',
        content: 'AI 기술 도입을 원하는 기업들을 위한 맞춤형 파트너십 프로그램을 시작합니다. 기업의 규모와 요구사항에 맞는 최적의 AI 솔루션을 제공합니다.',
        isImportant: false
    },
    {
        date: '2025.07.28',
        title: '💡 AI 컨설팅 서비스 확대',
        content: 'AI 도입 전략 수립부터 실행까지 전 과정을 지원하는 컨설팅 서비스를 확대합니다. 전문 컨설턴트가 기업별 맞춤 전략을 제공합니다.',
        isImportant: false
    }
];

// DOM 유틸리티 클래스
class DOMUtils {
    static querySelector<T extends HTMLElement>(selector: string): T | null {
        return document.querySelector<T>(selector);
    }
    
    static querySelectorAll<T extends HTMLElement>(selector: string): NodeListOf<T> {
        return document.querySelectorAll<T>(selector);
    }
    
    static getElementById<T extends HTMLElement>(id: string): T | null {
        return document.getElementById(id) as T | null;
    }
    
    static addClass(element: HTMLElement, className: string): void {
        element.classList.add(className);
    }
    
    static removeClass(element: HTMLElement, className: string): void {
        element.classList.remove(className);
    }
    
    static toggleClass(element: HTMLElement, className: string): void {
        element.classList.toggle(className);
    }
    
    static createElement<T extends HTMLElement>(tagName: string, className?: string, content?: string): T {
        const element = document.createElement(tagName) as T;
        if (className) element.className = className;
        if (content) element.innerHTML = content;
        return element;
    }
}

// 애니메이션 관리 클래스
class AnimationManager {
    private observer: IntersectionObserver;
    private animatedElements: Set<HTMLElement> = new Set();
    
    constructor() {
        const observerOptions: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            observerOptions
        );
    }
    
    private handleIntersection(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry: IntersectionObserverEntry) => {
            const target = entry.target as HTMLElement;
            
            if (entry.isIntersecting && !this.animatedElements.has(target)) {
                this.animateElement(target);
                this.animatedElements.add(target);
            }
        });
    }
    
    private animateElement(element: HTMLElement): void {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }
    
    public observeElements(selector: string): void {
        const elements = DOMUtils.querySelectorAll<HTMLElement>(selector);
        elements.forEach((element: HTMLElement) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            this.observer.observe(element);
        });
    }
    
    public cleanup(): void {
        this.observer.disconnect();
        this.animatedElements.clear();
    }
}

// 네비게이션 관리 클래스
class NavigationManager {
    private navLinks: NodeListOf<NavigationElement>;
    private websiteState: WebsiteState;
    
    constructor(websiteState: WebsiteState) {
        this.websiteState = websiteState;
        this.navLinks = DOMUtils.querySelectorAll<NavigationElement>('.nav-link');
        this.initializeNavigation();
        this.handleInitialHash();
    }
    
    private initializeNavigation(): void {
        this.navLinks.forEach((link: NavigationElement) => {
            link.addEventListener('click', this.handleNavClick.bind(this));
        });
        
        // 브라우저 뒤로가기/앞으로가기 지원
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }
    
    private handleInitialHash(): void {
        const hash = window.location.hash.substring(1);
        if (hash && this.isValidSection(hash)) {
            this.showSection(hash);
        }
    }
    
    private handlePopState(): void {
        const hash = window.location.hash.substring(1);
        if (hash && this.isValidSection(hash)) {
            this.showSection(hash);
        } else {
            this.showSection('home');
        }
    }
    
    private isValidSection(sectionId: string): boolean {
        return DOMUtils.getElementById(sectionId) !== null;
    }
    
    private handleNavClick(event: Event): void {
        event.preventDefault();
        const target = event.target as NavigationElement;
        const sectionId = target.dataset.section;
        
        if (sectionId && this.isValidSection(sectionId)) {
            this.showSection(sectionId);
            this.updateActiveLink(target);
        }
    }
    
    private updateActiveLink(activeLink: NavigationElement): void {
        this.navLinks.forEach((link: NavigationElement) => {
            DOMUtils.removeClass(link, 'active');
        });
        DOMUtils.addClass(activeLink, 'active');
    }
    
    public showSection(sectionId: string): void {
        // 모든 섹션 숨기기
        const sections = DOMUtils.querySelectorAll<HTMLElement>('.content-section');
        sections.forEach((section: HTMLElement) => {
            DOMUtils.removeClass(section, 'active');
        });
        
        // 선택된 섹션 표시
        const targetSection = DOMUtils.getElementById<HTMLElement>(sectionId);
        if (targetSection) {
            DOMUtils.addClass(targetSection, 'active');
            this.websiteState.setCurrentSection(sectionId);
            this.smoothScrollToTop();
            
            // 활성 링크 업데이트
            this.updateActiveLinkBySection(sectionId);
            
            // 분석 이벤트 발송 (가상)
            this.trackPageView(sectionId);
        }
    }
    
    private updateActiveLinkBySection(sectionId: string): void {
        this.navLinks.forEach((link: NavigationElement) => {
            DOMUtils.removeClass(link, 'active');
            if (link.dataset.section === sectionId) {
                DOMUtils.addClass(link, 'active');
            }
        });
    }
    
    private smoothScrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    private trackPageView(sectionId: string): void {
        // Google Analytics 또는 다른 분석 도구 연동
        console.log(`Page view: ${sectionId}`);
    }
}

// 폼 관리 클래스
class FormManager {
    private contactForm: HTMLFormElement | null;
    
    constructor() {
        this.contactForm = DOMUtils.querySelector<HTMLFormElement>('.contact-form form');
        this.initializeForm();
    }
    
    private initializeForm(): void {
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
            this.setupFormValidation();
        }
    }
    
    private setupFormValidation(): void {
        if (!this.contactForm) return;
        
        const inputs = this.contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearFieldError.bind(this));
        });
    }
    
    private validateField(event: Event): void {
        const field = event.target as HTMLInputElement | HTMLTextAreaElement;
        const errorElement = this.getOrCreateErrorElement(field);
        
        if (field.hasAttribute('required') && !field.value.trim()) {
            this.showFieldError(field, errorElement, '이 필드는 필수입니다.');
            return;
        }
        
        if (field.type === 'email' && field.value && !this.isValidEmail(field.value)) {
            this.showFieldError(field, errorElement, '올바른 이메일 주소를 입력해주세요.');
            return;
        }
        
        this.hideFieldError(field, errorElement);
    }
    
    private clearFieldError(event: Event): void {
        const field = event.target as HTMLInputElement | HTMLTextAreaElement;
        const errorElement = field.parentElement?.querySelector('.field-error');
        if (errorElement) {
            this.hideFieldError(field, errorElement as HTMLElement);
        }
    }
    
    private getOrCreateErrorElement(field: HTMLElement): HTMLElement {
        let errorElement = field.parentElement?.querySelector('.field-error') as HTMLElement;
        if (!errorElement) {
            errorElement = DOMUtils.createElement<HTMLElement>('div', 'field-error');
            errorElement.style.color = '#ff6b6b';
            errorElement.style.fontSize = '12px';
            errorElement.style.marginTop = '5px';
            errorElement.style.display = 'none';
            field.parentElement?.appendChild(errorElement);
        }
        return errorElement;
    }
    
    private showFieldError(field: HTMLElement, errorElement: HTMLElement, message: string): void {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        field.style.borderColor = '#ff6b6b';
    }
    
    private hideFieldError(field: HTMLElement, errorElement: HTMLElement): void {
        errorElement.style.display = 'none';
        field.style.borderColor = '#e9ecef';
    }
    
    private handleFormSubmit(event: Event): void {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = this.getFormData(form);
        
        if (this.validateForm(formData)) {
            this.submitForm(formData);
        }
    }
    
    private getFormData(form: HTMLFormElement): ContactFormData {
        return {
            name: (form.querySelector('input[placeholder*="이름"]') as HTMLInputElement)?.value || '',
            email: (form.querySelector('input[type="email"]') as HTMLInputElement)?.value || '',
            phone: (form.querySelector('input[type="tel"]') as HTMLInputElement)?.value || '',
            subject: (form.querySelector('input[placeholder*="제목"]') as HTMLInputElement)?.value || '',
            message: (form.querySelector('textarea') as HTMLTextAreaElement)?.value || '',
            type: (form.querySelector('select') as HTMLSelectElement)?.value || ''
        };
    }
    
    private validateForm(data: ContactFormData): boolean {
        const errors: string[] = [];
        
        if (!data.name.trim()) {
            errors.push('이름을 입력해주세요.');
        }
        
        if (!data.email.trim()) {
            errors.push('이메일을 입력해주세요.');
        } else if (!this.isValidEmail(data.email)) {
            errors.push('올바른 이메일 주소를 입력해주세요.');
        }
        
        if (!data.subject.trim()) {
            errors.push('제목을 입력해주세요.');
        }
        
        if (!data.message.trim()) {
            errors.push('문의 내용을 입력해주세요.');
        }
        
        if (errors.length > 0) {
            alert(errors.join('\n'));
            return false;
        }
        
        return true;
    }
    
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    private async submitForm(data: ContactFormData): Promise<void> {
        try {
            // 실제 환경에서는 서버로 데이터 전송
            await this.sendFormData(data);
            this.showSuccessMessage();
            this.resetForm();
        } catch (error) {
            console.error('Form submission error:', error);
            this.showErrorMessage();
        }
    }
    
    private async sendFormData(data: ContactFormData): Promise<void> {
        // 실제 API 엔드포인트로 데이터 전송하는 로직
        console.log('Form submitted:', data);
        
        // 시뮬레이션을 위한 지연
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }
    
    private showSuccessMessage(): void {
        const message = `문의가 성공적으로 전송되었습니다! 
        
빠른 시일 내에 답변드리겠습니다.
문의 확인은 ${COMPANY_INFO.email}로 발송된 메일을 확인해주세요.`;
        
        alert(message);
    }
    
    private showErrorMessage(): void {
        alert('문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    }
    
    private resetForm(): void {
        if (this.contactForm) {
            this.contactForm.reset();
            // 모든 에러 메시지 제거
            const errorElements = this.contactForm.querySelectorAll('.field-error');
            errorElements.forEach(error => error.remove());
        }
    }
}

// 뉴스 관리 클래스
class NewsManager {
    private newsContainer: HTMLElement | null;
    
    constructor() {
        this.newsContainer = DOMUtils.querySelector<HTMLElement>('.news-list');
        this.renderNews();
        this.showImportantNewsPopup();
    }
    
    private renderNews(): void {
        if (!this.newsContainer) return;
        
        this.newsContainer.innerHTML = '';
        
        NEWS_DATA.forEach((newsItem: NewsItem, index: number) => {
            const newsElement = this.createNewsElement(newsItem, index);
            this.newsContainer!.appendChild(newsElement);
        });
    }
    
    private createNewsElement(newsItem: NewsItem, index: number): HTMLElement {
        const article = DOMUtils.createElement<HTMLElement>(
            'article', 
            `news-item ${newsItem.isImportant ? 'important' : ''}`
        );
        
        // 애니메이션 지연을 위한 스타일 추가
        article.style.animationDelay = `${index * 0.1}s`;
        
        article.innerHTML = `
            <div class="news-date">${newsItem.date}</div>
            <h3>${newsItem.title}</h3>
            <p>${newsItem.content}</p>
        `;
        
        // 클릭 이벤트 추가 (상세보기 기능)
        article.addEventListener('click', () => {
            this.showNewsDetail(newsItem);
        });
        
        return article;
    }
    
    private showNewsDetail(newsItem: NewsItem): void {
        const modal = this.createNewsModal(newsItem);
        document.body.appendChild(modal);
        
        // 모달 닫기 이벤트
        const closeBtn = modal.querySelector('.modal-close');
        const backdrop = modal.querySelector('.modal-backdrop');
        
        [closeBtn, backdrop].forEach(element => {
            element?.addEventListener('click', () => {
                this.closeModal(modal);
            });
        });
        
        // ESC 키로 모달 닫기
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                this.closeModal(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        
        document.addEventListener('keydown', handleEscape);
    }
    
    private createNewsModal(newsItem: NewsItem): HTMLElement {
        const modal = DOMUtils.createElement<HTMLElement>('div', 'news-modal');
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${newsItem.title}</h3>
                    <button class="modal-close" aria-label="닫기">✕</button>
                </div>
                <div class="modal-body">
                    <div class="modal-date">${newsItem.date}</div>
                    <div class="modal-text">${newsItem.content}</div>
                </div>
            </div>
        `;
        
        // 모달 스타일 추가
        this.addModalStyles(modal);
        
        return modal;
    }
    
    private addModalStyles(modal: HTMLElement): void {
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const backdrop = modal.querySelector('.modal-backdrop') as HTMLElement;
        if (backdrop) {
            backdrop.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                cursor: pointer;
            `;
        }
        
        const content = modal.querySelector('.modal-content') as HTMLElement;
        if (content) {
            content.style.cssText = `
                background: white;
                border-radius: 12px;
                padding: 0;
                max-width: 600px;
                width: 90%;
                max-height: 80%;
                overflow-y: auto;
                position: relative;
                z-index: 10001;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            `;
        }
    }
    
    private closeModal(modal: HTMLElement): void {
        modal.style.opacity = '0';
        modal.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    }
    
    private showImportantNewsPopup(): void {
        // 중요한 뉴스가 있는지 확인
        const importantNews = NEWS_DATA.find(news => news.isImportant);
        
        if (importantNews) {
            // 팝업을 표시했는지 로컬 스토리지에서 확인
            const popupShown = localStorage.getItem(`popup_${importantNews.date}_${importantNews.title}`);
            
            if (!popupShown) {
                // 3초 후에 팝업 표시
                setTimeout(() => {
                    this.showNewsDetail(importantNews);
                    localStorage.setItem(`popup_${importantNews.date}_${importantNews.title}`, 'true');
                }, 3000);
            }
        }
    }
}

// 검색 관리 클래스
class SearchManager {
    private searchQuery: string = '';
    private searchResults: Map<string, HTMLElement[]> = new Map();
    
    public searchContent(query: string): void {
        this.searchQuery = query.toLowerCase().trim();
        
        if (!this.searchQuery) {
            this.clearSearchResults();
            return;
        }
        
        console.log('검색어:', query);
        
        // 검색 실행
        this.performSearch();
        this.highlightResults();
    }
    
    private performSearch(): void {
        this.clearSearchResults();
        
        const sections = DOMUtils.querySelectorAll<HTMLElement>('.content-section');
        
        sections.forEach(section => {
            const matches = this.findMatches(section);
            if (matches.length > 0) {
                this.searchResults.set(section.id, matches);
            }
        });
    }
    
    private findMatches(section: HTMLElement): HTMLElement[] {
        const matches: HTMLElement[] = [];
        const textElements = section.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li');
        
        textElements.forEach(element => {
            const text = element.textContent?.toLowerCase() || '';
            if (text.includes(this.searchQuery)) {
                matches.push(element as HTMLElement);
            }
        });
        
        return matches;
    }
    
    private highlightResults(): void {
        this.searchResults.forEach((elements) => {
            elements.forEach(element => {
                this.highlightText(element);
            });
        });
    }
    
    private highlightText(element: HTMLElement): void {
        const text = element.textContent || '';
        const regex = new RegExp(`(${this.searchQuery})`, 'gi');
        const highlightedText = text.replace(regex, '<mark>$1</mark>');
        element.innerHTML = highlightedText;
    }
    
    private clearSearchResults(): void {
        // 기존 하이라이트 제거
        const marks = document.querySelectorAll('mark');
        marks.forEach(mark => {
            const parent = mark.parentNode;
            if (parent) {
                parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
                parent.normalize();
            }
        });
        
        this.searchResults.clear();
    }
    
    public getSearchQuery(): string {
        return this.searchQuery;
    }
    
    public getSearchResults(): Map<string, HTMLElement[]> {
        return new Map(this.searchResults);
    }
}

// 테마 관리 클래스
class ThemeManager {
    private websiteState: WebsiteState;
    
    constructor(websiteState: WebsiteState) {
        this.websiteState = websiteState;
        this.initializeTheme();
        this.addThemeToggle();
    }
    
    private initializeTheme(): void {
        this.websiteState.initializeDarkMode();
    }
    
    private addThemeToggle(): void {
        const themeToggle = DOMUtils.createElement<HTMLButtonElement>(
            'button',
            'theme-toggle',
            '🌙'
        );
        
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: linear-gradient(135deg, #ffd700, #ffed4e);
            cursor: pointer;
            font-size: 20px;
            z-index: 1001;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        `;
        
        themeToggle.addEventListener('click', () => {
            this.toggleDarkMode();
            themeToggle.textContent = this.websiteState.getDarkMode() ? '☀️' : '🌙';
        });
        
        document.body.appendChild(themeToggle);
        
        // 초기 아이콘 설정
        themeToggle.textContent = this.websiteState.getDarkMode() ? '☀️' : '🌙';
    }
    
    public toggleDarkMode(): void {
        this.websiteState.toggleDarkMode();
    }
}

// 성능 모니터링 클래스
class PerformanceMonitor {
    private loadTime: number = 0;
    
    constructor() {
        this.measureLoadTime();
        this.setupPerformanceObserver();
    }
    
    private measureLoadTime(): void {
        window.addEventListener('load', () => {
            const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
            this.loadTime = perfData.loadEventEnd - perfData.loadEventStart;
            console.log(`페이지 로드 시간: ${this.loadTime.toFixed(2)}ms`);
        });
    }
    
    private setupPerformanceObserver(): void {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    console.log(`리소스 로드: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
                }
            });
            
            observer.observe({ entryTypes: ['resource'] });
        }
    }
    
    public getLoadTime(): number {
        return this.loadTime;
    }
}

// 전역 함수들 (HTML에서 호출용)
function showSection(sectionId: string): void {
    if (navigationManager) {
        navigationManager.showSection(sectionId);
    }
}

function searchContent(query: string): void {
    if (searchManager) {
        searchManager.searchContent(query);
    }
}

function toggleDarkMode(): void {
    if (themeManager) {
        themeManager.toggleDarkMode();
    }
}

function changeLanguage(lang: string): void {
    console.log('언어 변경:', lang);
    // 향후 다국어 지원 기능 구현
    // localStorage.setItem('preferredLanguage', lang);
}

// 전역 인스턴스들
let websiteState: WebsiteState;
let navigationManager: NavigationManager;
let animationManager: AnimationManager;
let searchManager: SearchManager;
let themeManager: ThemeManager;

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', (): void => {
    try {
        console.log('🚀 K-AX 웹사이트 초기화 시작...');
        
        // 성능 모니터링 시작
        new PerformanceMonitor();
        
        // 전역 상태 초기화
        websiteState = new WebsiteState();
        
        // 모든 매니저 인스턴스 초기화
        navigationManager = new NavigationManager(websiteState);
        new FormManager();
        animationManager = new AnimationManager();
        new NewsManager();
        searchManager = new SearchManager();
        themeManager = new ThemeManager(websiteState);
        
        // 애니메이션 대상 요소들 설정
        setTimeout(() => {
            animationManager.observeElements(
                '.news-item, .timeline-item, .service-card, .solution-item, ' +
                '.job-card, .benefit-card, .process-step, .faq-item, .value-item'
            );
        }, 500);
        
        // 스크롤 이벤트 최적화
        let scrollTimer: number;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimer);
            scrollTimer = window.setTimeout(() => {
                // 스크롤 관련 로직 실행
            }, 100);
        });
        
        console.log('✅ K-AX 웹사이트가 성공적으로 로드되었습니다.');
        
    } catch (error) {
        console.error('❌ 웹사이트 초기화 중 오류 발생:', error);
        
        // 오류 발생시 기본 기능이라도 작동하도록
        const fallbackNavigation = () => {
            const links = document.querySelectorAll('[data-section]');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = e.target as HTMLElement;
                    const sectionId = target.getAttribute('data-section');
                    if (sectionId) {
                        const sections = document.querySelectorAll('.content-section');
                        sections.forEach(s => s.classList.remove('active'));
                        const targetSection = document.getElementById(sectionId);
                        if (targetSection) {
                            targetSection.classList.add('active');
                        }
                    }
                });
            });
        };
        
        fallbackNavigation();
    }
});

// 페이지 언로드 시 정리
window.addEventListener('beforeunload', (): void => {
    if (animationManager) {
        animationManager.cleanup();
    }
});

// 전역 에러 핸들링
window.addEventListener('error', (event: ErrorEvent): void => {
    console.error('전역 에러 발생:', {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
    });
    
    // 에러 리포팅 (실제 환경에서는 분석 도구로 전송)
});

// 처리되지 않은 Promise 에러 핸들링
window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent): void => {
    console.error('처리되지 않은 Promise 에러:', event.reason);
    event.preventDefault(); // 브라우저 콘솔에 에러가 표시되지 않도록
});

// TypeScript 모듈 export 제거 (전역 함수 사용)

// 타입 선언 제거 (전역 함수로 직접 할당)

// 전역 함수를 window 객체에 할당
window.showSection = showSection;
window.searchContent = searchContent;
window.toggleDarkMode = toggleDarkMode;
window.changeLanguage = changeLanguage;
