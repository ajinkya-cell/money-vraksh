import { serviceCategories, getSubService } from '../../data';
import ServiceDetailPage from '../../components/ServiceDetailPage';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const category = serviceCategories.find(c => c.id === 'equity');
  if (!category) return [];
  return category.subServices.map(service => ({ slug: service.slug }));
}

export default async function EquityDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getSubService('equity', slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen pt-[120px] pb-24">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full relative z-10">
        <ServiceDetailPage service={service} />
      </main>
    </div>
  );
}
