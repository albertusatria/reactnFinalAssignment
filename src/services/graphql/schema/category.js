import {gql} from 'apollo-boost';

export const categoriesRoot = gql`
  {
    categoryList {
      children_count
      children {
        id
        level
        name
        path
        url_path
        url_key
        image
      }
    }
  }
`;

export const productListByCategoryId = gql`
  query getProductsByCategoryId(
    $categoryId: String
    $currentPage: Int
    $pageSize: Int
    $sortBy: ProductAttributeSortInput
  ) {
    products(
      filter: {category_id: {eq: $categoryId}}
      currentPage: $currentPage
      pageSize: $pageSize
      sort: $sortBy
      selectedStore: 1
    ) {
      items {
        id
        name
        sku
        description {
          html
        }
        short_description {
          html
        }
        special_price
        special_from_date
        special_to_date
        attribute_set_id
        meta_title
        meta_keyword
        meta_description
        image {
          url
          label
        }
        small_image {
          url
          label
        }
        thumbnail {
          url
          label
        }
        new_from_date
        new_to_date
        options_container
        created_at
        updated_at
        country_of_manufacture
        product_links {
          sku
          link_type
          linked_product_sku
          linked_product_type
          position
        }
        media_gallery {
          url
          label
        }
        media_gallery {
          label
          url
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        price_tiers {
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
          quantity
        }
        gift_message_available
        manufacturer
        categories {
          id
          description
          name
        }
        canonical_url
        crosssell_products {
          id
          name
          sku
        }
        only_x_left_in_stock
        related_products {
          id
          name
          sku
        }
        stock_status
        swatch_image
        upsell_products {
          id
          name
          sku
        }
        url_key
        url_suffix
        url_rewrites {
          url
        }
      }
      total_count
      page_info {
        page_size
      }
      sort_fields {
        default
        options {
          label
          value
        }
      }
    }
  }
`;
