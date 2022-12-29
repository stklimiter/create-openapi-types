//https://swagger.io/specification/


/**
 * A signed 32 bits
 * @typedef {number} int32
 */

/**
 * A signed 64 bits (a.k.a long)
 * @typedef {number} int64
 */

/**
 * @typedef {number} float
 */

/**
 * @typedef {number} double
 */

/**
 * base64 encoded characters
 * @typedef {number} byte
 */

/**
 * any sequence of octets
 * @typedef {number} binary
 */

/**
 * string    date    As defined by full-date - RFC3339
 * @typedef {string} date
 */

/**
 * string    date    As defined by date-time - RFC3339
 * @typedef {date-time} date
 */

/**
 * string    password    A hint to UIs to obscure input.
 * @typedef {string} password
 */

/**
 * This string MUST be the semantic version number of the OpenAPI Specification version that the OpenAPI document uses.
 * The openapi field SHOULD be used by tooling specifications and clients to interpret the OpenAPI document. This is not
 * related to the API info.
 * @typedef {string} VersionString
 */


/**
 * This is the root document object of the OpenAPI document.
 * @typedef {{  openapi: VersionString,
 *              info: InfoObject,
 *              servers?: ServerObject[],
 *              paths: PathsObject,
 *              components?: ComponentsObject,
 *              security?: SecurityRequirementObject[],
 *              tags?: TagObject[],
 *              externalDocs?: ExternalDocumentationObject}} OpenApiObject
 */

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented
 * in editing or documentation generation tools for convenience.
 * @typedef {{  title: string,
 *              description?: string,
 *              termsOfService?: string,
 *              contact?: ContactObject,
 *              license?: LicenseObject,
 *              version: string   }} InfoObject
 */

/**
 * Contact information for the exposed API.
 * @typedef {{  name?: string,
 *              url?: string,
 *              email?: string }} ContactObject
 */

/**
 * License information for the exposed API.
 * @typedef {{  name: string,
 *              url?: string  }} LicenseObject
 */

/**
 * An object representing a Server. for url: Variable substitutions will be made when a variable is named in {brackets}.
 * @typedef {{  url: string,
 *              description?: string,
 *              variables?: [string, ServerVariableObject][]   }} ServerObject
 */

/**
 * An object representing a Server Variable for server URL template substitution.
 * @typedef {{  enum?: string[],
 *              default: string,
 *              description?: string   }} ServerVariableObject
 */


/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the
 * Server Object in order to construct the full URL. The Paths MAY be empty, due to ACL constraints.
 * @typedef {{  [key: string]: PathItemObject   }} PathsObject
 */

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to ACL constraints. The path
 * itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 * @typedef {{  $ref?: string,
 *              summary?: string,
 *              description?: string,
 *              get?: OperationObject,
 *              put?: OperationObject,
 *              post?: OperationObject,
 *              delete?: OperationObject,
 *              options?: OperationObject,
 *              head?: OperationObject,
 *              patch?: OperationObject,
 *              trace?: OperationObject,
 *              servers?: ServerObject[],
 *              parameters?: (ParameterObject | ReferenceObject)[]  }} PathItemObject
 */

/**
 * Describes a single API operation on a path.
 * @typedef {{  tags?: string[],
 *              summary?: string,
 *              description?: string,
 *              externalDocs?: ExternalDocumentationObject,
 *              operationId?: string,
 *              parameters?: (ParameterObject | ReferenceObject)[],
 *              requestBody?: RequestBodyObject | ReferenceObject,
 *              responses: ResponseObjects,
 *              callbacks?: [string, (CallbackObject | ReferenceObject)][],
 *              deprecated?: boolean,
 *              security?: SecurityRequirementObject[],
 *              servers?: ServerObject[]    }} OperationObject
 */

/**
 * Describes a single operation parameter.
 *
 * A unique parameter is defined by a combination of a name and location.
 *
 * <h3>Parameter Locations</h3>
 * There are four possible parameter locations specified by the in field:
 *
 * path - Used together with Path Templating, where the parameter value is actually part of the operation's URL. This does not include the host or base path of the API. For example, in /items/{itemId}, the path parameter is itemId.
 * query - Parameters that are appended to the URL. For example, in /items?id=###, the query parameter is id.
 * header - Custom headers that are expected as part of the request. Note that RFC7230 states header names are case insensitive.
 * cookie - Used to pass a specific cookie value to the API.
 * @typedef {{  name: string,
 *              in: string,
 *              description?: string,
 *              required?: boolean,
 *              deprecated?: boolean,
 *              allowEmptyValue?: boolean  }} ParameterObject
 */

/**
 * A simple object to allow referencing other components in the specification, internally and externally.
 *
 * The Reference Object is defined by JSON Reference and follows the same structure, behavior and rules.
 *
 * For this specification, reference resolution is accomplished as defined by the JSON Reference specification and not
 * by the JSON Schema specification.
 * @typedef {{  $ref: string }} ReferenceObject
 */

/**
 * Allows referencing an external resource for extended documentation.
 * @typedef {{  description?: string,
 *              url: string }} ExternalDocumentationObject
 */

/**
 * Describes a single request body.
 * @typedef {{  description?: string,
 *              content: [string, MediaTypeObject][],
 *              required: boolean   }} RequestBodyObject
 */

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
 *
 * The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.
 *
 * @typedef {{  default?: ResponseObject | ReferenceObject,
 *              [key: HTTPStatusCode]: ResponseObject | ReferenceObject   }} ResponsesObject
 */

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response.
 *
 * @typedef {{  description: string,
 *              headers?: [string, (HeaderObject | ReferenceObject)][],
 *              content?: [string, MediaTypeObject][],
 *              links?: [string, (LinkObject | ReferenceObject)][]  }} ResponseObject
 */

/**
 * A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object
 * that describes a set of requests that may be initiated by the API provider and the expected responses. The key value
 * used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the
 * callback operation.
 *
 * @typedef {{  [key: string]: PathItemObject  }} CallbackObject
 */


/**
 * Lists the required security schemes to execute this operation. The name used for each property MUST correspond to a
 * security scheme declared in the Security Schemes under the Components Object.
 *
 * Security Requirement Objects that contain multiple schemes require that all schemes MUST be satisfied for a request
 * to be authorized. This enables support for scenarios where multiple query parameters or HTTP headers are required to
 * convey security information.
 *
 * When a list of Security Requirement Objects is defined on the OpenAPI Object or Operation Object, only one of the
 * Security Requirement Objects in the list needs to be satisfied to authorize the request.
 *
 * @typedef {{  [key: string]: string[]  }} SecurityRequirementObject
 */



/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object
 * will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 *
 * @typedef {{  schemas: string[]  }} ComponentsObject
 */

/**
 * Adds metadata to a single tag that is used by the Operation Object. It is not mandatory to have a Tag Object per tag
 * defined in the Operation Object instances.
 *
 * @typedef {{  name: string, description: string, externalDocs: ExternalDocumentationObject  }} TagObject
 */

/**
 * Helper type for HTTPStatusCode
 * @typedef {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'0'} Decimal
 */

/**
 * Http Status code, containing 3 decimals
 * @typedef {`${Decimal}${Decimal}${Decimal}`} HTTPStatusCode
 */

/**
 * Optional Patterned Object
 *
 * @typedef {{[L in HTTPStatusCode]?: (ResponsesObject | ReferenceObject)}} PatternedResponseObject
 */


/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes that are not covered individually by the specification.
 *
 * The Responses Object MUST contain at least one response code, and it SHOULD be the response for a successful operation call.
 *
 * @typedef {{default: (ResponsesObject | ReferenceObject)} & PatternedResponseObject} ResponseObjects
 */


/**
 * Each Media Type Object provides schema and examples for the media type identified by its key.
 *
 * @typedef {{  schema: SchemaObject,
 *              example: any,
 *              examples: Map<string, (ExampleObject | ReferenceObject)>,
 *              encoding: Map<string, EncodingObject>}} MediaTypeObject
 */

/**
 * The Header Object follows the structure of the Parameter Object with the following changes:
 *
 * name MUST NOT be specified, it is given in the corresponding headers map.
 * in MUST NOT be specified, it is implicitly in header.
 * All traits that are affected by the location MUST be applicable to a location of header (for example, style).
 *
 * @typedef {{  description?: string,
 *              required?: boolean,
 *              deprecated?: boolean,
 *              allowEmptyValue?: boolean  }} HeaderObject
 */

/**
 * The Link object represents a possible design-time link for a response. The presence of a link does not guarantee the
 * caller's ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between
 * responses and other operations.
 *
 * Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link
 * information in the runtime response.
 * </p>
 * For computing links, and providing instructions to execute them, a runtime expression is used for accessing values in
 * an operation and using them as parameters while invoking the linked operation.
 *
 * @typedef {{  operationRef: string,
 *              operationId: string,
 *              parameters: Map<string, any>,
 *              requestBody: Map<string, Expression>,
 *              description: string,
 *              server: ServerObject}} LinkObject
 */

/**
 * @typedef {'$'} Escape
 */

/**
 * Runtime expressions allow defining values based on information that will only be available within the HTTP message in an actual API call. This mechanism is used by Link Objects and Callback Objects.
 *
 * The runtime expression is defined by the following ABNF syntax
 *
 * @typedef {`${Escape}${string}`} Expression
 */

/**
 * The Schema Object allows the definition of input and output data types. These types can be objects, but also primitives
 * and arrays. This object is an extended subset of the JSON Schema Specification Wright Draft 00.
 *
 * For more information about the properties, see JSON Schema Core and JSON Schema Validation. Unless stated otherwise,
 * the property definitions follow the JSON Schema.
 *
 * @typedef {{  nullable: boolean,
 *              discriminator: DiscriminatorObject,
 *              readOnly: boolean,
 *              writeOnly: boolean,
 *              xml: XMLObject,
 *              externalDocs: ExternalDocumentationObject,
 *              example: any,
 *              depricated: any
 *              }} SchemaObject
 */

/**
 * When request bodies or response payloads may be one of a number of different schemas, a discriminator object can be used to aid in serialization, deserialization, and validation. The discriminator is a specific object in a schema which is used to inform the consumer of the specification of an alternative schema based on the value associated with it.
 *
 * When using the discriminator, inline schemas will not be considered.
 *
 * @typedef {{  propertyName: string,
 *              mapping: Map<string, string>
 *                  }} DiscriminatorObject
 */

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 *
 * When using arrays, XML element names are not inferred (for singular/plural forms) and the name property SHOULD be used
 * to add that information. See examples for expected behavior.
 *
 * @typedef {{  name: string,
 *              namespace: string,
 *              prefix: string,
 *              attribute: boolean,
 *              wrapped: boolean
 *                  }} XMLObject
 */

/**
 *
 * @typedef {{  summary: string,
 *              description: string,
 *              value: any,
 *              externalValue: string
 *                  }} ExampleObject
 */

/**
 * A single encoding definition applied to a single schema property.
 *
 * @typedef {{  contentType: string,
 *              headers: Map<string, HeaderObject>,
 *              style: string,
 *              explode: boolean,
 *              allwedReserved: boolean
 *                  }} EncodingObject
 */