import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Make sure to validate the locale
  if (locale !== 'en' && locale !== 'ja') notFound();
 
  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});