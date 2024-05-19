import { CalendarIcon, TicketIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Programación de Eventos',
    description:
      'Planifica y organiza tus eventos con facilidad. Gestiona fechas, lugares y todos los detalles necesarios en un solo lugar.',
    icon: CalendarIcon,
  },
  {
    name: 'Venta de Boletos',
    description:
      'Crea y distribuye boletos sin problemas. Monitorea las ventas y los detalles de los asistentes de manera eficiente.',
    icon: TicketIcon,
  },
  {
    name: 'Gestión de Asistentes',
    description:
      'Rastrea el registro de asistentes, envía notificaciones y gestiona el ingreso al evento de manera eficiente.',
    icon: UsersIcon,
  },
  {
    name: 'Acceso VIP',
    description:
      'Proporciona acceso especial y beneficios a asistentes VIP. Personaliza experiencias para hacer tus eventos inolvidables.',
    icon: StarIcon,
  },
]

export default function CuerpoPage() {
  return (
    <div className="bg-gradient-to-r  py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-black">Tu Evento, a Tu Manera</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Todas las herramientas que necesitas para un evento exitoso
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            Simplifica la planificación y gestión de tus eventos con nuestro conjunto de herramientas completo. Desde la programación hasta la venta de boletos, tenemos todo lo que necesitas.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-blck">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
                    <feature.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-800">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
