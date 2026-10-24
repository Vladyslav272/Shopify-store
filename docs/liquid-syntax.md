# Liquid syntax

## Liquid delimiters

- **`{{ ... }}`**: Output – prints a value.
- **`{{- ... -}}`**: Output, trims whitespace around the value.
- **`{% ... %}`**: Logic/control tag (if, for, assign, etc.), does not print anything, no whitespace trim.
- **`{%- ... -%}`**: Logic/control tag, trims whitespace around the tag.

**Tip:**
Adding a dash (`-`) after `{%`/`{{` or before `%}`/`}}` trims spaces or newlines next to the tag.

**Examples:**
- `{{- product.title -}}` → print value, remove surrounding spaces or lines.
- `{%- if available -%}In stock{%- endif -%}` → logic, removes extra spaces/lines.

## Liquid operators

**Comparison operators:**
- ==
- !=
- >
- <
- >=
- <=

**Logical operators:**
- `or`
- `and`
- `contains` - checks if a string contains a substring, or if an array contains a string

### Comparison and comparison tags

**Key condition principles:**
- For simplificity, ALWAYS use nested `if` conditions when the logic requires more than one logical operator
- Parentheses are not supported in Liquid
- Ternary conditionals are not supported in Liquid, so always use `{% if cond %}`

**Basic comparison example:**
```liquid
{% if product.title == "Awesome Shoes" %}
  These shoes are awesome!
{% endif %}
```

**Multiple Conditions:**
```liquid
{% if product.type == "Shirt" or product.type == "Shoes" %}
  This is a shirt or a pair of shoes.
{% endif %}
```

**Contains Usage:**
- For strings: `{% if product.title contains "Pack" %}`
- For arrays: `{% if product.tags contains "Hello" %}`
- Note: `contains` only works with strings, not objects in arrays

**{% elsif %} (used inside if/unless only)**
```liquid
{% if a %}
  ...
{% elsif b %}
  ...
{% endif %}
```

**{% unless %}**
```liquid
{% unless condition %}
  ...
{% endunless %}
```

**{% case %}**
```liquid
{% case variable %}
  {% when 'a' %}
    a
  {% when 'b' %}
    b
  {% else %}
    other
{% endcase %}
```

**{% else %} (used inside if, unless, case, or for)**
```liquid
{% if product.available %}
  In stock
{% else %}
  Sold out
{% endif %}
```
_or inside a for loop:_
```liquid
{% for item in collection.products %}
  {{ item.title }}
{% else %}
  No products found.
{% endfor %}
```

### Variables and variable tags

```liquid
{% assign my_variable = 'value' %}

{% capture my_variable %}
  Contents of variable
{% endcapture %}

{% increment counter %}
{% decrement counter %}
```

---

← Back to the [theme development guide](README.md)
