import React from 'react'
import AppliedFilter from './AppliedFilter'

const AppliedFilters = (props: {
  appliedFilters: Filter[]
  removeFilters: (filters: Filter[]) => void
}): JSX.Element => {
  const removeFilterHandler = (filter: Filter): void => {
    props.removeFilters([filter])
  }

  const removeAllFilters = (): void => {
    props.removeFilters(props.appliedFilters)
  }

  const filters = props.appliedFilters.map((filter: Filter, idx: number) => (
    <AppliedFilter filter={filter} removeFilter={removeFilterHandler} key={`appliedFilter_${idx}`} />
  ))

  return (
    <div className="selected-filters card">
      <ul className="filters__list">{filters}</ul>
      <div className="center">
        <button className="btn-clear-filters" onClick={removeAllFilters}>
          Clear
        </button>
      </div>
    </div>
  )
}

export default AppliedFilters
