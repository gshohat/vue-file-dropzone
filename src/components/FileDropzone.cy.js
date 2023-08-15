import FileDropzone from './FileDropzone.vue'

describe('<FileDropzone />', () => {
  beforeEach(() => {
  })


  it('renders intro text inside dropzone', () => {
    cy.mount(FileDropzone);
    const dropzoneFileElement = cy.get('[data-cy="dropzone"]');
    dropzoneFileElement.should('have.text', 'Drag & drop some files here, or click to select files');
  })
})
