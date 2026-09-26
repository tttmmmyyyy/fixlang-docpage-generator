# Minilib.Monad.Reader

Defined in minilib-monad@0.12.0

Reader monad.

For details, see [blog post: The Reader and Writer Monads and Comonads](https://www.olivierverdier.com/posts/2014/12/31/reader-writer-monad-comonad/).

Example:
```
type Obj = unbox struct { foo: I64, bar: String };

main: IO () = (
    let r: ReaderT Obj IO () = do {
        let foo = *asks(@foo);
        let bar = *asks(@bar);
        println((foo,bar).format("foo={} bar={}")).lift_io     // will print "foo=1 bar=abc"
    };
    r.run_reader_t(Obj { foo:1, bar:"abc" })
);
```

## Values

### namespace Minilib.Monad.Reader

#### asks

Type: `[rm : Minilib.Monad.Reader::MonadReader] (Minilib.Monad.Reader::MonadReaderIF::EnvType rm -> a) -> rm a`

`asks(f)` is same as `ask.map(f)`.

#### map_reader_t

Type: `[m : Std::Monad, n : Std::Monad] (m a -> n b) -> Minilib.Monad.Reader::ReaderT e m a -> Minilib.Monad.Reader::ReaderT e n b`

Maps an underlying monad and a value using the specified function.

#### read

**Deprecated**: Use `MonadReaderIF::ask` instead.

Type: `[m : Std::Monad] Minilib.Monad.Reader::ReaderT e m e`

A reader monad that returns the environment as a value.

#### reader

Type: `(e -> a) -> Minilib.Monad.Reader::Reader e a`

Creates a reader monad from a function.

#### reader_t

Type: `[m : Std::Monad] (e -> m a) -> Minilib.Monad.Reader::ReaderT e m a`

Creates a generic reader monad from a function.

#### run_reader

Type: `e -> Minilib.Monad.Reader::Reader e a -> a`

Runs a reader monad with the supplied environment.

#### run_reader_t

Type: `[m : Std::Monad] e -> Minilib.Monad.Reader::ReaderT e m a -> m a`

Runs a generic reader monad with the supplied environment.

#### with_reader_t

Type: `[m : Std::Monad] (e1 -> e) -> Minilib.Monad.Reader::ReaderT e m a -> Minilib.Monad.Reader::ReaderT e1 m a`

Creates a reader monad with the modified environment.

### namespace Minilib.Monad.Reader::MonadReaderIF

#### ask

Type: `[rm : Minilib.Monad.Reader::MonadReaderIF] rm (Minilib.Monad.Reader::MonadReaderIF::EnvType rm)`

Trait member of `Minilib.Monad.Reader::MonadReaderIF`

A monad that returns the internal environment as a value.

#### local

Type: `[rm : Minilib.Monad.Reader::MonadReaderIF] (Minilib.Monad.Reader::MonadReaderIF::EnvType rm -> Minilib.Monad.Reader::MonadReaderIF::EnvType rm) -> rm a -> rm a`

Trait member of `Minilib.Monad.Reader::MonadReaderIF`

`rm.local(f)` creates a reader monad with an environment modified by `f`.

## Types and aliases

### namespace Minilib.Monad.Reader

#### Reader

Defined as: `type Reader e = Minilib.Monad.Reader::ReaderT e Minilib.Monad.Iden::Iden`

#### ReaderT

Defined as: `type [m : *->*] ReaderT e m a = unbox struct { ...fields... }`

Reader monad wraps a function from an environment to a value.
`e` is a type of an environment.
`m` is a type of an underlyind monad.
`a` is a type of a value.

##### field `data`

Type: `e -> m a`

## Traits and aliases

### namespace Minilib.Monad.Reader

#### trait `MonadReader = Std::Monad + Minilib.Monad.Reader::MonadReaderIF`

Kind: `*->*`

A trait for the interface of generic reader monads.

#### trait `[rm : *->*] rm : MonadReaderIF`

A trait for generic reader monads that manages the internal environment.

##### type `EnvType`

Defined as: `EnvType rm`

The type of the internal environment.

##### method `ask`

Type: `rm (Minilib.Monad.Reader::MonadReaderIF::EnvType rm)`

A monad that returns the internal environment as a value.

##### method `local`

Type: `(Minilib.Monad.Reader::MonadReaderIF::EnvType rm -> Minilib.Monad.Reader::MonadReaderIF::EnvType rm) -> rm a -> rm a`

`rm.local(f)` creates a reader monad with an environment modified by `f`.

## Trait implementations

### impl `Minilib.Monad.Reader::ReaderT e : Minilib.Monad.Trans::MonadTrans`

### impl `[m : Minilib.Monad.Error::MonadError] Minilib.Monad.Reader::ReaderT e m : Minilib.Monad.Error::MonadErrorIF`

### impl `[m : Minilib.Monad.IO::MonadIOFail] Minilib.Monad.Reader::ReaderT e m : Minilib.Monad.IO::MonadIOFailIF`

### impl `[m : Minilib.Monad.IO::MonadIO] Minilib.Monad.Reader::ReaderT e m : Minilib.Monad.IO::MonadIOIF`

### impl `[m : Std::Monad] Minilib.Monad.Reader::ReaderT e m : Minilib.Monad.Reader::MonadReaderIF`

### impl `[m : Std::Monad] Minilib.Monad.Reader::ReaderT e m : Std::Functor`

### impl `[m : Std::Monad] Minilib.Monad.Reader::ReaderT e m : Std::Monad`