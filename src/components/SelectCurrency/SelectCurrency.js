import { useSelect } from 'downshift'

const items = [
  'usd',
  'eur',
  'pln',
]

const SelectCurrency = () => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({ items })

  return (
    <div>
      <label {...getLabelProps()}>Choose an element:</label>
      <button type='button' {...getToggleButtonProps()}>
        {selectedItem || 'Elements'}
      </button>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SelectCurrency
