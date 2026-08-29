# FireGuard Domain Events

Events are immutable facts used to decouple services. Every event should include:

- `event_id`
- `event_type`
- `schema_version`
- `occurred_at`
- `producer`
- `payload`

Consumers must tolerate duplicate delivery. Events do not bypass safety or authorization.
