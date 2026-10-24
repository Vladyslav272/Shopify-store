# The `{% schema %}` tag on blocks and sections

**Key principles: follow the "Good practices" and "Validate the `{% schema %}` content" using JSON schemas**

## Good practices

When defining the `{% schema %}` tag on sections and blocks, follow these guidelines to use the values:

**Single property settings**: For settings that correspond to a single CSS property, use CSS variables:
```liquid
<div class="collection" style="--gap: {{ block.settings.gap }}px">
  Example
</div>

{% stylesheet %}
  .collection {
    gap: var(--gap);
  }
{% endstylesheet %}

{% schema %}
{
  "settings": [{
    "type": "range",
    "label": "gap",
    "id": "gap",
    "min": 0,
    "max": 100,
    "unit": "px",
    "default": 0,
  }]
}
{% endschema %}
```

**Multiple property settings**: For settings that control multiple CSS properties, use CSS classes:
```liquid
<div class="collection {{ block.settings.layout }}">
  Example
</div>

{% stylesheet %}
  .collection--full-width {
    /* multiple styles */
  }
  .collection--narrow {
    /* multiple styles */
  }
{% endstylesheet %}

{% schema %}
{
  "settings": [{
    "type": "select",
    "id": "layout",
    "label": "layout",
    "values": [
      { "value": "collection--full-width", "label": "t:options.full" },
      { "value": "collection--narrow", "label": "t:options.narrow" }
    ]
  }]
}
{% endschema %}
```

### Mobile layouts

If you need to create a mobile layout and you want the merchant to be able to select one or two columns, use a select input:

```liquid
{% schema %}
{
  "type": "select",
  "id": "columns_mobile",
  "label": "Columns on mobile",
  "options": [
    { "value": 1, "label": "1" },
    { "value": "2", "label": "2" }
  ]
}
{% endschema %}
```

---

← Back to the [theme development guide](README.md)
