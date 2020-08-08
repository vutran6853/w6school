<template>
  <div id="html-element-container" class="d-flex-column h-35">
    <p class="text-size-2">{{ title }}</p>
    <p style="">An HTML element is defined by a start tag, some content, and an end tag:</p>
    <div class="text-size-1-2">
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">tagname</span>
      <span class="color-mediumblue">&gt;</span>
      <span>Content goes here...</span>
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">/tagname</span>
      <span class="color-mediumblue">&gt;</span>
    </div>
    <p style="">The HTML <strong>element</strong> is everything from the start tag to the end tag:</p>
    <div class="text-size-1-2">
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">h1</span>
      <span class="color-mediumblue">&gt;</span>
      <span>My First Heading</span>
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">/h1</span>
      <span class="color-mediumblue">&gt;</span>
    </div>
    <div class="text-size-1-2">
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">p</span>
      <span class="color-mediumblue">&gt;</span>
      <span>My first paragraph.</span>
      <span class="color-mediumblue">&lt;</span>
      <span class="color-brown">/p</span>
      <span class="color-mediumblue">&gt;</span>
    </div>

    <table class="html-table-container">
      <tbody>
        <tr>
          <th>Start tag</th>
          <th>Element content</th>
          <th>End tag</th>
        </tr>
        <tr>
          <td>&lt;h1&gt;</td>
          <td>My First Heading</td>
          <td>&lt;/h1&gt;</td>
        </tr>
        <tr>
          <td>&lt;p&gt;</td>
          <td>Element content</td>
          <td>&lt;/p&gt;</td>
        </tr>
        <tr>
          <td>&lt;br&gt;</td>
          <td>My first paragraph.</td>
          <td>&lt;/br&gt;</td>
        </tr>
      </tbody>
    </table>

    <div class="html-note-container">
      <p>
        <strong>Note:</strong>
        Some HTML elements have no content (like the &lt;br&gt; element). These elements are called empty elements. Empty elements do not have an end tag!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementUI',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

#html-element-container > .html-table-container {
  display: flex;
  width: 100%;
  height: 10rem;
  border-top: 1px solid  #ddd;
  border-right: 1px solid  #ddd;
  border-left: 1px solid  #ddd;
}
#html-element-container > .html-table-container > tbody {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  /* padding: 0.5rem; */
}

#html-element-container > .html-table-container > tbody > tr {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #ddd;
  height: 40px;
  justify-content: space-around;
  align-items: center;
}

#html-element-container > .html-table-container > tbody > tr:nth-child(even) {
  background-color: #f1f1f1;
}

#html-element-container > .html-note-container {
  height: 4rem;
  background-color: #ffffcc;
  display: flex;
  padding: 1rem;
  align-items: center;
}
</style>