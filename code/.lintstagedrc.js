export default {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
    `npm run lint --fix ${filenames.join(' --file')}`
  ]
}
