import { FC } from "react";
import { Switch } from '@headlessui/react'

interface IToggleSwtichProps {
  enabled: boolean,
  setEnabled: (val: boolean) => void,
  text: String
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const ToggleSwitch: FC<IToggleSwtichProps> = ({ enabled, setEnabled, text }) => {
  return (
    <>
      <label className="text-xl mr-4 font-medium text-gray-700">
        {text}
      </label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span className="sr-only">{text}</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </>
  )
}

export default ToggleSwitch;