import React, {useState, Fragment} from 'react'
import Logo from '../assets/ladder_itg.png'
import { RadioGroup, Listbox, Transition, Switch } from '@headlessui/react'
import { CheckCircleIcon, CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import '../styles/forms.css'
import { genders } from './genderData';
import { heights } from './heightData';

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}


export default function LadderForm() {



  const [selectedGender, setSelectedGender] = useState('');
  const [selectedHeight, setSelectedHeight] = useState(heights[12]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [enabled, setEnabled] = useState(false)


  function nextStep(e) {

    e.preventDefault();
    console.log(selectedGender.value)
  }

  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
    <div className="px-4 py-5 sm:px-6 text-center">
        <img src={Logo} className='max-w-lg mx-auto' /> 
      
    </div>
      <div className="px-4 py-5 sm:p-6">
        <form className='text-center'>
        <RadioGroup value={selectedGender} onChange={setSelectedGender}>
     
      <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 text-center sm:gap-x-4">
        {genders.map((gender) => (
          <RadioGroup.Option
            key={gender.id}
            value={gender}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-indigo-600 ring-2 ring-button-purple' : '',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1  justify-center">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-xl font-bold text-center text-gray-900">
                      {gender.label}
                    </RadioGroup.Label>
                    
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-button-purple')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-button-purple' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
          </RadioGroup>
          
          <div className="mt-5">
      <label htmlFor="email" className="block text-lg font-bold text-left leading-6 text-gray-900">
        Date Of Birth
      </label>
      <div >
      <input
                            type="text"
                            name="expires"
                            id="expires"
                    placeholder="MM/DD/YYYY"
                    pattern="\d*"
                            required
                            className="w-full lg:text-xl text-center border-gray-300  text-black font-bold text-md rounded-md shadow-sm focus:border-button-purple focus:ring-button-purple sm:text-sm py-5 p-2.5"
                   
                           
                          />
      </div>
          </div>
          
          <Listbox value={selectedHeight} onChange={setSelectedHeight}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-lg mt-5  font-bold text-left leading-6 text-gray-900">Choose Your Height</Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="w-full lg:text-xl text-center border-gray-300  text-black font-bold text-md rounded-md shadow-sm focus:border-button-purple focus:ring-button-purple sm:text-sm py-5 p-2.5">
             
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
             
                {heights.map((height) => (
                   <Listbox.Options className="absolute mt-1 max-h-60 w-full z-99 overflow-scroll rounded-md bg-white border-gray-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  <Listbox.Option
                    key={height.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={height.label}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {height.label}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            {height.label}
                          </span>
                        ) : null}
                      </>
                    )}
                    </Listbox.Option>
                    </Listbox.Options>

                ))}
            </Transition>
          </div>
        </>
      )}
          </Listbox>
          
          <div className="mt-5">
      <label htmlFor="email" className="block text-lg font-bold text-left leading-6 text-gray-900">
        Enter Your Weight
      </label>
      <div >
      <input
                            type="text"
                            name="expires"
                            id="expires"
                    placeholder="156"
                    pattern="\d*"
                            required
                            className="w-full lg:text-xl text-center border-gray-300  text-black font-bold text-md rounded-md shadow-sm focus:border-button-purple focus:ring-button-purple sm:text-sm py-5 p-2.5"
                   
                           
                          />
      </div>
          </div>
          
            
          
          <div className="mt-5">
      <label htmlFor="email" className="block text-lg font-bold text-left leading-6 text-gray-900">
        Annual Household Income
      </label>
      <div >
      <input
                            type="text"
                            name="expires"
                            id="expires"
                    placeholder="Total Income"
                    pattern="\d*"
                            required
                            className="w-full lg:text-xl text-center border-gray-300  text-black font-bold text-md rounded-md shadow-sm focus:border-button-purple focus:ring-button-purple sm:text-sm py-5 p-2.5"
                   
                           
                          />
      </div>
          </div>
          

          <div className="mt-5">
      <label htmlFor="email" className="block text-lg font-bold text-left leading-6 text-gray-900">
        Annual Household Income
      </label>
      <div >
      <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-button-purple' : 'bg-input-purple'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
      </div>
          </div>

         
        </form>
      </div>
      
      <div className="px-4 py-5 sm:px-6 text-center">
      <button
            type="submit"
            disabled={isButtonDisabled}
            className={`px-6 py-4 w-full  mt-5 text-lg bg-pink-600 ${isButtonDisabled ? 'cursor-not-allowed disabled:opacity-75  bg-input-purple' : ""} hover:shadow-lg text-white rounded`}
            id="ladderInputs"
            onClick={nextStep}>
            Get Your Quote
          </button>      
    </div>
  </div>
  )
}

