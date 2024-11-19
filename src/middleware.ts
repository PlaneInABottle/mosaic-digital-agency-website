import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware({
    defaultLocale: routing.defaultLocale,
    locales: routing.locales,
    localePrefix: 'as-needed',
});

export const config = {
    matcher: ['/', '/((?!api|_next/static|_next/image|images|favicon.ico|__forms.html).*)'],
};
